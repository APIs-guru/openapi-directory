from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProvisionedCapacityDescription:
    capacity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CapacityId' }})
    expiration_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpirationDate' }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartDate' }})
    
