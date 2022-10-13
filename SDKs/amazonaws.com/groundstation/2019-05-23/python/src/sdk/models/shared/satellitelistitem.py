from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SatelliteListItem:
    ground_stations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groundStations' }})
    norad_satellite_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'noradSatelliteID' }})
    satellite_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'satelliteArn' }})
    satellite_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'satelliteId' }})
    
