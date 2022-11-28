from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReplaceContentEntry:
    r"""ReplaceContentEntry
    Information about a replacement content entry in the conflict of a merge or pull request operation.
    """
    
    file_path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filePath') }})
    replacement_type: ReplacementTypeEnumEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('replacementType') }})
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    file_mode: Optional[FileModeTypeEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileMode') }})
    
