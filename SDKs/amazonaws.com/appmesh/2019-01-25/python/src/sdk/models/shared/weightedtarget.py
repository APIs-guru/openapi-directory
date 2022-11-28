from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WeightedTarget:
    r"""WeightedTarget
    An object that represents a target and its relative weight. Traffic is distributed across targets according to their relative weight. For example, a weighted target with a relative weight of 50 receives five times as much traffic as one with a relative weight of 10. The total weight for all targets combined must be less than or equal to 100.
    """
    
    virtual_node: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualNode') }})
    weight: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('weight') }})
    
