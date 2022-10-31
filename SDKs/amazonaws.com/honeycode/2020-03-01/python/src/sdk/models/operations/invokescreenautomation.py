from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class InvokeScreenAutomationPathParams:
    app_id: str = field(default=None, metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    automation_id: str = field(default=None, metadata={'path_param': { 'field_name': 'automationId', 'style': 'simple', 'explode': False }})
    screen_id: str = field(default=None, metadata={'path_param': { 'field_name': 'screenId', 'style': 'simple', 'explode': False }})
    workbook_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workbookId', 'style': 'simple', 'explode': False }})
    

@dataclass
class InvokeScreenAutomationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class InvokeScreenAutomationRequestBody:
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientRequestToken' }})
    row_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowId' }})
    variables: Optional[dict[str, shared.VariableValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variables' }})
    

@dataclass
class InvokeScreenAutomationRequest:
    path_params: InvokeScreenAutomationPathParams = field(default=None)
    headers: InvokeScreenAutomationHeaders = field(default=None)
    request: InvokeScreenAutomationRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class InvokeScreenAutomationResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    automation_execution_exception: Optional[Any] = field(default=None)
    automation_execution_timeout_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invoke_screen_automation_result: Optional[shared.InvokeScreenAutomationResult] = field(default=None)
    request_timeout_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
