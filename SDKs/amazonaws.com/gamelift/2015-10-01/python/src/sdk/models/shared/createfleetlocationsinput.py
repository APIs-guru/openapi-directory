from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import locationconfiguration


@dataclass_json
@dataclass
class CreateFleetLocationsInput:
    fleet_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetId' }})
    locations: List[locationconfiguration.LocationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Locations' }})
    
