from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CancelDataRepositoryTaskRequest:
    r"""CancelDataRepositoryTaskRequest
    Cancels a data repository task.
    """
    
    task_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskId') }})
    
