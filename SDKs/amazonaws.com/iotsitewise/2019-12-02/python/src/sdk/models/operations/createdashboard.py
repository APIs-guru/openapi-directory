from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateDashboardHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateDashboardRequestBody:
    dashboard_definition: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dashboardDefinition') }})
    dashboard_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dashboardName') }})
    project_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    dashboard_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dashboardDescription') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass
class CreateDashboardRequest:
    headers: CreateDashboardHeaders = field()
    request: CreateDashboardRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDashboardResponse:
    content_type: str = field()
    status_code: int = field()
    create_dashboard_response: Optional[shared.CreateDashboardResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
