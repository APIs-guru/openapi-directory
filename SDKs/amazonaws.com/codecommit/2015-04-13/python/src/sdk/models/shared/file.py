from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class File:
    r"""File
    Returns information about a file in a repository.
    """
    
    absolute_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('absolutePath') }})
    blob_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blobId') }})
    file_mode: Optional[FileModeTypeEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileMode') }})
    relative_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relativePath') }})
    
