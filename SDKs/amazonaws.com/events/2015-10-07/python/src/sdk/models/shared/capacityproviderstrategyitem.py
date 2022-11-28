from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CapacityProviderStrategyItem:
    r"""CapacityProviderStrategyItem
    The details of a capacity provider strategy. To learn more, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CapacityProviderStrategyItem.html\">CapacityProviderStrategyItem</a> in the Amazon ECS API Reference.
    """
    
    capacity_provider: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('capacityProvider') }})
    base: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('base') }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weight') }})
    
