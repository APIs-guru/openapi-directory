from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import groundstationdata


@dataclass_json
@dataclass
class ListGroundStationsResponse:
    ground_station_list: Optional[List[groundstationdata.GroundStationData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groundStationList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
