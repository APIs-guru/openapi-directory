from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Location:
    r"""Location
    Returns information about the location of a change or comment in the comparison between two commits or a pull request.
    """
    
    file_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filePath') }})
    file_position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filePosition') }})
    relative_file_version: Optional[RelativeFileVersionEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relativeFileVersion') }})
    
