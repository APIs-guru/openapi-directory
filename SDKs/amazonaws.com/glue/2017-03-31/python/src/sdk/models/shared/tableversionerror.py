from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TableVersionError:
    r"""TableVersionError
    An error record for table-version operations.
    """
    
    error_detail: Optional[ErrorDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorDetail') }})
    table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VersionId') }})
    
