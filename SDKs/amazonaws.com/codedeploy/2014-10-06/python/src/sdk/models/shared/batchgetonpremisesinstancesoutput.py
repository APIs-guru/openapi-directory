from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchGetOnPremisesInstancesOutput:
    r"""BatchGetOnPremisesInstancesOutput
    Represents the output of a <code>BatchGetOnPremisesInstances</code> operation.
    """
    
    instance_infos: Optional[List[InstanceInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceInfos') }})
    
