from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class StartSuiteRunPathParams:
    suite_definition_id: str = field(default=None, metadata={'path_param': { 'field_name': 'suiteDefinitionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class StartSuiteRunHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class StartSuiteRunRequestBodySuiteRunConfiguration:
    primary_device: Optional[shared.DeviceUnderTest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryDevice' }})
    selected_test_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selectedTestList' }})
    

@dataclass_json
@dataclass
class StartSuiteRunRequestBody:
    suite_definition_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suiteDefinitionVersion' }})
    suite_run_configuration: Optional[StartSuiteRunRequestBodySuiteRunConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suiteRunConfiguration' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class StartSuiteRunRequest:
    path_params: StartSuiteRunPathParams = field(default=None)
    headers: StartSuiteRunHeaders = field(default=None)
    request: StartSuiteRunRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartSuiteRunResponse:
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    start_suite_run_response: Optional[shared.StartSuiteRunResponse] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
