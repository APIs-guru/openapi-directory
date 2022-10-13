from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class AssociateDeviceWithPlacementPathParams:
    device_template_name: str = field(default=None, metadata={'path_param': { 'field_name': 'deviceTemplateName', 'style': 'simple', 'explode': False }})
    placement_name: str = field(default=None, metadata={'path_param': { 'field_name': 'placementName', 'style': 'simple', 'explode': False }})
    project_name: str = field(default=None, metadata={'path_param': { 'field_name': 'projectName', 'style': 'simple', 'explode': False }})
    

@dataclass
class AssociateDeviceWithPlacementHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class AssociateDeviceWithPlacementRequestBody:
    device_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceId' }})
    

@dataclass
class AssociateDeviceWithPlacementRequest:
    path_params: AssociateDeviceWithPlacementPathParams = field(default=None)
    headers: AssociateDeviceWithPlacementHeaders = field(default=None)
    request: AssociateDeviceWithPlacementRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AssociateDeviceWithPlacementResponse:
    associate_device_with_placement_response: Optional[dict[str, Any]] = field(default=None)
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_conflict_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
