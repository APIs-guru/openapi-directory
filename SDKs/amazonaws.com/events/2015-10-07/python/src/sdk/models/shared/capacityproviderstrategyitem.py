from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CapacityProviderStrategyItem:
    base: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'base' }})
    capacity_provider: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capacityProvider' }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weight' }})
    
