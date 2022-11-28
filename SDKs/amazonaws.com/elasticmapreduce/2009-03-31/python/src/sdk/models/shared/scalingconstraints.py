from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ScalingConstraints:
    r"""ScalingConstraints
    The upper and lower EC2 instance limits for an automatic scaling policy. Automatic scaling activities triggered by automatic scaling rules will not cause an instance group to grow above or below these limits.
    """
    
    max_capacity: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxCapacity') }})
    min_capacity: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinCapacity') }})
    
