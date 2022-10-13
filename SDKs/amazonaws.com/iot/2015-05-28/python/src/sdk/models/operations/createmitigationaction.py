from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateMitigationActionPathParams:
    action_name: str = field(default=None, metadata={'path_param': { 'field_name': 'actionName', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateMitigationActionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreateMitigationActionRequestBodyActionParams:
    add_things_to_thing_group_params: Optional[shared.AddThingsToThingGroupParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addThingsToThingGroupParams' }})
    enable_io_t_logging_params: Optional[shared.EnableIoTLoggingParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableIoTLoggingParams' }})
    publish_finding_to_sns_params: Optional[shared.PublishFindingToSnsParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishFindingToSnsParams' }})
    replace_default_policy_version_params: Optional[shared.ReplaceDefaultPolicyVersionParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replaceDefaultPolicyVersionParams' }})
    update_ca_certificate_params: Optional[shared.UpdateCaCertificateParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateCACertificateParams' }})
    update_device_certificate_params: Optional[shared.UpdateDeviceCertificateParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateDeviceCertificateParams' }})
    

@dataclass_json
@dataclass
class CreateMitigationActionRequestBody:
    action_params: CreateMitigationActionRequestBodyActionParams = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionParams' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    tags: Optional[List[shared.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class CreateMitigationActionRequest:
    path_params: CreateMitigationActionPathParams = field(default=None)
    headers: CreateMitigationActionHeaders = field(default=None)
    request: CreateMitigationActionRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateMitigationActionResponse:
    content_type: str = field(default=None)
    create_mitigation_action_response: Optional[shared.CreateMitigationActionResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
