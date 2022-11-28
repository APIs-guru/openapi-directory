from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateFileSystemFromBackupResponse:
    r"""CreateFileSystemFromBackupResponse
    The response object for the <code>CreateFileSystemFromBackup</code> operation.
    """
    
    file_system: Optional[FileSystem] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileSystem') }})
    
