from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetMissionProfileResponse:
    contact_post_pass_duration_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contactPostPassDurationSeconds' }})
    contact_pre_pass_duration_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contactPrePassDurationSeconds' }})
    dataflow_edges: Optional[List[List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataflowEdges' }})
    minimum_viable_contact_duration_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumViableContactDurationSeconds' }})
    mission_profile_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'missionProfileArn' }})
    mission_profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'missionProfileId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    tracking_config_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trackingConfigArn' }})
    
