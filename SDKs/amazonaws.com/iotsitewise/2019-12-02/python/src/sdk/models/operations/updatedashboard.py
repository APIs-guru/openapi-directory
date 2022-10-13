from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateDashboardPathParams:
    dashboard_id: str = field(default=None, metadata={'path_param': { 'field_name': 'dashboardId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDashboardHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class UpdateDashboardRequestBody:
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientToken' }})
    dashboard_definition: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dashboardDefinition' }})
    dashboard_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dashboardDescription' }})
    dashboard_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dashboardName' }})
    

@dataclass
class UpdateDashboardRequest:
    path_params: UpdateDashboardPathParams = field(default=None)
    headers: UpdateDashboardHeaders = field(default=None)
    request: UpdateDashboardRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDashboardResponse:
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_dashboard_response: Optional[dict[str, Any]] = field(default=None)
    
