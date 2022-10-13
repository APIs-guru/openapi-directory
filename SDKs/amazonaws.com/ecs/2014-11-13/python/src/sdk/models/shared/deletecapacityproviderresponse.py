from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import capacityprovider


@dataclass_json
@dataclass
class DeleteCapacityProviderResponse:
    capacity_provider: Optional[capacityprovider.CapacityProvider] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capacityProvider' }})
    
