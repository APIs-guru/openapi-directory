from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutActionRevisionInput:
    r"""PutActionRevisionInput
    Represents the input of a <code>PutActionRevision</code> action.
    """
    
    action_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionName') }})
    action_revision: ActionRevision = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionRevision') }})
    pipeline_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineName') }})
    stage_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stageName') }})
    
