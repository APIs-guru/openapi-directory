from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteFileSystemWindowsConfiguration:
    r"""DeleteFileSystemWindowsConfiguration
    The configuration object for the Microsoft Windows file system used in the <code>DeleteFileSystem</code> operation.
    """
    
    final_backup_tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FinalBackupTags') }})
    skip_final_backup: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SkipFinalBackup') }})
    
