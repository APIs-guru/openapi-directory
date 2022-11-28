from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteFileSystemLustreResponse:
    r"""DeleteFileSystemLustreResponse
    The response object for the Amazon FSx for Lustre file system being deleted in the <code>DeleteFileSystem</code> operation.
    """
    
    final_backup_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FinalBackupId') }})
    final_backup_tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FinalBackupTags') }})
    
