from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deletefileentry
from . import replacecontententry
from . import setfilemodeentry


@dataclass_json
@dataclass
class ConflictResolution:
    delete_files: Optional[List[deletefileentry.DeleteFileEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteFiles' }})
    replace_contents: Optional[List[replacecontententry.ReplaceContentEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replaceContents' }})
    set_file_modes: Optional[List[setfilemodeentry.SetFileModeEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'setFileModes' }})
    
