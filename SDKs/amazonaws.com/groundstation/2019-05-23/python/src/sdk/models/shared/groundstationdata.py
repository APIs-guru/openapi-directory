from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GroundStationData:
    ground_station_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groundStationId' }})
    ground_station_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groundStationName' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    
