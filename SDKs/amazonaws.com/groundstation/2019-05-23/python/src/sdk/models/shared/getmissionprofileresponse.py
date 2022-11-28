from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetMissionProfileResponse:
    r"""GetMissionProfileResponse
    <p/>
    """
    
    contact_post_pass_duration_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactPostPassDurationSeconds') }})
    contact_pre_pass_duration_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactPrePassDurationSeconds') }})
    dataflow_edges: Optional[List[List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataflowEdges') }})
    minimum_viable_contact_duration_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumViableContactDurationSeconds') }})
    mission_profile_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('missionProfileArn') }})
    mission_profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('missionProfileId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    tracking_config_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingConfigArn') }})
    
