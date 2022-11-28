from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BatchGetOnPremisesInstancesInput:
    r"""BatchGetOnPremisesInstancesInput
    Represents the input of a <code>BatchGetOnPremisesInstances</code> operation.
    """
    
    instance_names: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceNames') }})
    
