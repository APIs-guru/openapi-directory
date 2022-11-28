from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConflictMetadata:
    r"""ConflictMetadata
    Information about the metadata for a conflict in a merge operation.
    """
    
    content_conflict: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentConflict') }})
    file_mode_conflict: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileModeConflict') }})
    file_modes: Optional[FileModes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileModes') }})
    file_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filePath') }})
    file_sizes: Optional[FileSizes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileSizes') }})
    is_binary_file: Optional[IsBinaryFile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isBinaryFile') }})
    merge_operations: Optional[MergeOperations] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mergeOperations') }})
    number_of_conflicts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfConflicts') }})
    object_type_conflict: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectTypeConflict') }})
    object_types: Optional[ObjectTypes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectTypes') }})
    
