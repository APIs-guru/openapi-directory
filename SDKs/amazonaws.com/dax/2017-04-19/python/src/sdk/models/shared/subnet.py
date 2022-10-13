from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Subnet:
    subnet_availability_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetAvailabilityZone' }})
    subnet_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetIdentifier' }})
    
