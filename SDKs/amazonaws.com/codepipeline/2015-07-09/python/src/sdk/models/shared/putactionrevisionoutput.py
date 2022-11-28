from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PutActionRevisionOutput:
    r"""PutActionRevisionOutput
    Represents the output of a <code>PutActionRevision</code> action.
    """
    
    new_revision: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newRevision') }})
    pipeline_execution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineExecutionId') }})
    
