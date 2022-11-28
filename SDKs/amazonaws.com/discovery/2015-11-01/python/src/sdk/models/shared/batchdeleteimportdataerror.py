from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchDeleteImportDataError:
    r"""BatchDeleteImportDataError
    Error messages returned for each import task that you deleted as a response for this command.
    """
    
    error_code: Optional[BatchDeleteImportDataErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCode') }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDescription') }})
    import_task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importTaskId') }})
    
