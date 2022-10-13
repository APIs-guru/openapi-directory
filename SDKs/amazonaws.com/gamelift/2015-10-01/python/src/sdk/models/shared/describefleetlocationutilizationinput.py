from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeFleetLocationUtilizationInput:
    fleet_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetId' }})
    location: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Location' }})
    
