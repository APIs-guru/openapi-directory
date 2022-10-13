from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateMitigationActionPathParams:
    action_name: str = field(default=None, metadata={'path_param': { 'field_name': 'actionName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateMitigationActionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class UpdateMitigationActionRequestBodyActionParams:
    add_things_to_thing_group_params: Optional[shared.AddThingsToThingGroupParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addThingsToThingGroupParams' }})
    enable_io_t_logging_params: Optional[shared.EnableIoTLoggingParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableIoTLoggingParams' }})
    publish_finding_to_sns_params: Optional[shared.PublishFindingToSnsParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishFindingToSnsParams' }})
    replace_default_policy_version_params: Optional[shared.ReplaceDefaultPolicyVersionParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replaceDefaultPolicyVersionParams' }})
    update_ca_certificate_params: Optional[shared.UpdateCaCertificateParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateCACertificateParams' }})
    update_device_certificate_params: Optional[shared.UpdateDeviceCertificateParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateDeviceCertificateParams' }})
    

@dataclass_json
@dataclass
class UpdateMitigationActionRequestBody:
    action_params: Optional[UpdateMitigationActionRequestBodyActionParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionParams' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    

@dataclass
class UpdateMitigationActionRequest:
    path_params: UpdateMitigationActionPathParams = field(default=None)
    headers: UpdateMitigationActionHeaders = field(default=None)
    request: UpdateMitigationActionRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateMitigationActionResponse:
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_mitigation_action_response: Optional[shared.UpdateMitigationActionResponse] = field(default=None)
    
