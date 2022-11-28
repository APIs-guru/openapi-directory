from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateMitigationActionPathParams:
    action_name: str = field(metadata={'path_param': { 'field_name': 'actionName', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateMitigationActionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateMitigationActionRequestBodyActionParams:
    r"""CreateMitigationActionRequestBodyActionParams
    The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).
    """
    
    add_things_to_thing_group_params: Optional[shared.AddThingsToThingGroupParams] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addThingsToThingGroupParams') }})
    enable_io_t_logging_params: Optional[shared.EnableIoTLoggingParams] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableIoTLoggingParams') }})
    publish_finding_to_sns_params: Optional[shared.PublishFindingToSnsParams] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishFindingToSnsParams') }})
    replace_default_policy_version_params: Optional[shared.ReplaceDefaultPolicyVersionParams] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replaceDefaultPolicyVersionParams') }})
    update_ca_certificate_params: Optional[shared.UpdateCaCertificateParams] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateCACertificateParams') }})
    update_device_certificate_params: Optional[shared.UpdateDeviceCertificateParams] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateDeviceCertificateParams') }})
    

@dataclass_json
@dataclass
class CreateMitigationActionRequestBody:
    action_params: CreateMitigationActionRequestBodyActionParams = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionParams') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    tags: Optional[List[shared.Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass
class CreateMitigationActionRequest:
    headers: CreateMitigationActionHeaders = field()
    path_params: CreateMitigationActionPathParams = field()
    request: CreateMitigationActionRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateMitigationActionResponse:
    content_type: str = field()
    status_code: int = field()
    create_mitigation_action_response: Optional[shared.CreateMitigationActionResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
