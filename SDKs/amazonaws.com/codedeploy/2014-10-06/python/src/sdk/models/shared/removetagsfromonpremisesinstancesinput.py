from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RemoveTagsFromOnPremisesInstancesInput:
    r"""RemoveTagsFromOnPremisesInstancesInput
    Represents the input of a <code>RemoveTagsFromOnPremisesInstances</code> operation.
    """
    
    instance_names: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceNames') }})
    tags: List[Tag] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
