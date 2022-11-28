from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DataRepositoryTaskFailureDetails:
    r"""DataRepositoryTaskFailureDetails
    Provides information about why a data repository task failed. Only populated when the task <code>Lifecycle</code> is set to <code>FAILED</code>.
    """
    
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Message') }})
    
