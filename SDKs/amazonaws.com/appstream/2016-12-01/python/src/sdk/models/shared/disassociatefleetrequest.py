from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DisassociateFleetRequest:
    fleet_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetName' }})
    stack_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackName' }})
    
