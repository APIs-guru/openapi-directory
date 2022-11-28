from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RunCommandParameters:
    r"""RunCommandParameters
    This parameter contains the criteria (either InstanceIds or a tag) used to specify which EC2 instances are to be sent the command. 
    """
    
    run_command_targets: List[RunCommandTarget] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RunCommandTargets') }})
    
