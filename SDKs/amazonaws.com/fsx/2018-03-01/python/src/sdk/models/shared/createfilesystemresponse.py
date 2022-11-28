from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateFileSystemResponse:
    r"""CreateFileSystemResponse
    The response object returned after the file system is created.
    """
    
    file_system: Optional[FileSystem] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileSystem') }})
    
