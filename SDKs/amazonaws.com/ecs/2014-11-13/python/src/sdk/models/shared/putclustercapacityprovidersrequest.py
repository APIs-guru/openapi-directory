from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import capacityproviderstrategyitem


@dataclass_json
@dataclass
class PutClusterCapacityProvidersRequest:
    capacity_providers: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capacityProviders' }})
    cluster: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster' }})
    default_capacity_provider_strategy: List[capacityproviderstrategyitem.CapacityProviderStrategyItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultCapacityProviderStrategy' }})
    
