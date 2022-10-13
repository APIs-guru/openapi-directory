from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateControlPathParams:
    control_id: str = field(default=None, metadata={'path_param': { 'field_name': 'controlId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateControlHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class UpdateControlRequestBody:
    action_plan_instructions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionPlanInstructions' }})
    action_plan_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionPlanTitle' }})
    control_mapping_sources: List[shared.ControlMappingSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'controlMappingSources' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    testing_information: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testingInformation' }})
    

@dataclass
class UpdateControlRequest:
    path_params: UpdateControlPathParams = field(default=None)
    headers: UpdateControlHeaders = field(default=None)
    request: UpdateControlRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateControlResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    update_control_response: Optional[shared.UpdateControlResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
