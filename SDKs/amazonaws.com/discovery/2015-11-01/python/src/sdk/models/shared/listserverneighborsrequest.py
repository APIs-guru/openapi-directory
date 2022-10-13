from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListServerNeighborsRequest:
    configuration_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configurationId' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    neighbor_configuration_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'neighborConfigurationIds' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    port_information_needed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portInformationNeeded' }})
    
