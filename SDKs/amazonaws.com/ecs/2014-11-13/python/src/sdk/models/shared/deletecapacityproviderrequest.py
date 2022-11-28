from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteCapacityProviderRequest:
    capacity_provider: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('capacityProvider') }})
    
