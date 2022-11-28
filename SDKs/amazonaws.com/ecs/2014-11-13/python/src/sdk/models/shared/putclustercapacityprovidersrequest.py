from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutClusterCapacityProvidersRequest:
    capacity_providers: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('capacityProviders') }})
    cluster: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    default_capacity_provider_strategy: List[CapacityProviderStrategyItem] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultCapacityProviderStrategy') }})
    
