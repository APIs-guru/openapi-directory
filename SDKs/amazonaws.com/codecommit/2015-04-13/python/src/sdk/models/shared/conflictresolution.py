from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConflictResolution:
    r"""ConflictResolution
    If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when resolving conflicts during a merge.
    """
    
    delete_files: Optional[List[DeleteFileEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteFiles') }})
    replace_contents: Optional[List[ReplaceContentEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replaceContents') }})
    set_file_modes: Optional[List[SetFileModeEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('setFileModes') }})
    
