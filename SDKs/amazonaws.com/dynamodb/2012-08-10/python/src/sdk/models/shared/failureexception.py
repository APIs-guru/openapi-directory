from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FailureException:
    r"""FailureException
    Represents a failure a contributor insights operation.
    """
    
    exception_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExceptionDescription') }})
    exception_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExceptionName') }})
    
