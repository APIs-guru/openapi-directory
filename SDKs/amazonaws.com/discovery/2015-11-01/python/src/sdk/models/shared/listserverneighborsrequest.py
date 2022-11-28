from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ListServerNeighborsRequest:
    configuration_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurationId') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResults') }})
    neighbor_configuration_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('neighborConfigurationIds') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    port_information_needed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portInformationNeeded') }})
    
