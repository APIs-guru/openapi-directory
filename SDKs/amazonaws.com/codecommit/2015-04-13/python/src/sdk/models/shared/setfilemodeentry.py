from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SetFileModeEntry:
    r"""SetFileModeEntry
    Information about the file mode changes.
    """
    
    file_mode: FileModeTypeEnumEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileMode') }})
    file_path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filePath') }})
    
