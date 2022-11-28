from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ColumnMetadata:
    r"""ColumnMetadata
    Metadata for column in the table.
    """
    
    format: FormatEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
