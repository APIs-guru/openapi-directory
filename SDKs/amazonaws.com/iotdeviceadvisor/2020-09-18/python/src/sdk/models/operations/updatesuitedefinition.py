from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateSuiteDefinitionPathParams:
    suite_definition_id: str = field(metadata={'path_param': { 'field_name': 'suiteDefinitionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSuiteDefinitionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration:
    r"""UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration
    Gets Suite Definition Configuration.
    """
    
    device_permission_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devicePermissionRoleArn') }})
    devices: Optional[List[shared.DeviceUnderTest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devices') }})
    intended_for_qualification: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intendedForQualification') }})
    root_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rootGroup') }})
    suite_definition_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suiteDefinitionName') }})
    

@dataclass_json
@dataclass
class UpdateSuiteDefinitionRequestBody:
    suite_definition_configuration: Optional[UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suiteDefinitionConfiguration') }})
    

@dataclass
class UpdateSuiteDefinitionRequest:
    headers: UpdateSuiteDefinitionHeaders = field()
    path_params: UpdateSuiteDefinitionPathParams = field()
    request: UpdateSuiteDefinitionRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateSuiteDefinitionResponse:
    content_type: str = field()
    status_code: int = field()
    internal_server_exception: Optional[Any] = field(default=None)
    update_suite_definition_response: Optional[shared.UpdateSuiteDefinitionResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
