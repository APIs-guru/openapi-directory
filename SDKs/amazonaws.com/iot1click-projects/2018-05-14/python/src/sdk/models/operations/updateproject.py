from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateProjectPathParams:
    project_name: str = field(metadata={'path_param': { 'field_name': 'projectName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateProjectHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateProjectRequestBodyPlacementTemplate:
    r"""UpdateProjectRequestBodyPlacementTemplate
    An object defining the template for a placement.
    """
    
    default_attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultAttributes') }})
    device_templates: Optional[dict[str, shared.DeviceTemplate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceTemplates') }})
    

@dataclass_json
@dataclass
class UpdateProjectRequestBody:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    placement_template: Optional[UpdateProjectRequestBodyPlacementTemplate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placementTemplate') }})
    

@dataclass
class UpdateProjectRequest:
    headers: UpdateProjectHeaders = field()
    path_params: UpdateProjectPathParams = field()
    request: UpdateProjectRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateProjectResponse:
    content_type: str = field()
    status_code: int = field()
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    update_project_response: Optional[dict[str, Any]] = field(default=None)
    
