from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ColumnError:
    r"""ColumnError
    Encapsulates a column name that failed and the reason for failure.
    """
    
    column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ColumnName') }})
    error: Optional[ErrorDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Error') }})
    
