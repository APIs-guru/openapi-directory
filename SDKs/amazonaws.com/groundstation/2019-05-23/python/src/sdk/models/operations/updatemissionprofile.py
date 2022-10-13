from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateMissionProfilePathParams:
    mission_profile_id: str = field(default=None, metadata={'path_param': { 'field_name': 'missionProfileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateMissionProfileHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class UpdateMissionProfileRequestBody:
    contact_post_pass_duration_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contactPostPassDurationSeconds' }})
    contact_pre_pass_duration_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contactPrePassDurationSeconds' }})
    dataflow_edges: Optional[List[List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataflowEdges' }})
    minimum_viable_contact_duration_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumViableContactDurationSeconds' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    tracking_config_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trackingConfigArn' }})
    

@dataclass
class UpdateMissionProfileRequest:
    path_params: UpdateMissionProfilePathParams = field(default=None)
    headers: UpdateMissionProfileHeaders = field(default=None)
    request: UpdateMissionProfileRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateMissionProfileResponse:
    content_type: str = field(default=None)
    dependency_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    mission_profile_id_response: Optional[shared.MissionProfileIDResponse] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
