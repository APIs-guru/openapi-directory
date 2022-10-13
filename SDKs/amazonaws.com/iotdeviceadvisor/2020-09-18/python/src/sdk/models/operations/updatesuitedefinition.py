from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateSuiteDefinitionPathParams:
    suite_definition_id: str = field(default=None, metadata={'path_param': { 'field_name': 'suiteDefinitionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSuiteDefinitionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration:
    device_permission_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devicePermissionRoleArn' }})
    devices: Optional[List[shared.DeviceUnderTest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devices' }})
    intended_for_qualification: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intendedForQualification' }})
    root_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rootGroup' }})
    suite_definition_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suiteDefinitionName' }})
    

@dataclass_json
@dataclass
class UpdateSuiteDefinitionRequestBody:
    suite_definition_configuration: Optional[UpdateSuiteDefinitionRequestBodySuiteDefinitionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suiteDefinitionConfiguration' }})
    

@dataclass
class UpdateSuiteDefinitionRequest:
    path_params: UpdateSuiteDefinitionPathParams = field(default=None)
    headers: UpdateSuiteDefinitionHeaders = field(default=None)
    request: UpdateSuiteDefinitionRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateSuiteDefinitionResponse:
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    update_suite_definition_response: Optional[shared.UpdateSuiteDefinitionResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
