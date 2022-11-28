from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StepConfig:
    r"""StepConfig
    Specification for a cluster (job flow) step.
    """
    
    hadoop_jar_step: HadoopJarStepConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HadoopJarStep') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    action_on_failure: Optional[ActionOnFailureEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActionOnFailure') }})
    
