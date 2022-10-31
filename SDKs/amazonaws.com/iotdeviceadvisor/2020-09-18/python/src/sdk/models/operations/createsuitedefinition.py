from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateSuiteDefinitionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateSuiteDefinitionRequestBodySuiteDefinitionConfiguration:
    device_permission_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devicePermissionRoleArn' }})
    devices: Optional[List[shared.DeviceUnderTest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devices' }})
    intended_for_qualification: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intendedForQualification' }})
    root_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rootGroup' }})
    suite_definition_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suiteDefinitionName' }})
    

@dataclass_json
@dataclass
class CreateSuiteDefinitionRequestBody:
    suite_definition_configuration: Optional[CreateSuiteDefinitionRequestBodySuiteDefinitionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suiteDefinitionConfiguration' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class CreateSuiteDefinitionRequest:
    headers: CreateSuiteDefinitionHeaders = field(default=None)
    request: CreateSuiteDefinitionRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateSuiteDefinitionResponse:
    content_type: str = field(default=None)
    create_suite_definition_response: Optional[shared.CreateSuiteDefinitionResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
