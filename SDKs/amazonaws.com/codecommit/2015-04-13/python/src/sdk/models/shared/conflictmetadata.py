from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import filemodes
from . import filesizes
from . import isbinaryfile
from . import mergeoperations
from . import objecttypes


@dataclass_json
@dataclass
class ConflictMetadata:
    content_conflict: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentConflict' }})
    file_mode_conflict: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileModeConflict' }})
    file_modes: Optional[filemodes.FileModes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileModes' }})
    file_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filePath' }})
    file_sizes: Optional[filesizes.FileSizes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileSizes' }})
    is_binary_file: Optional[isbinaryfile.IsBinaryFile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isBinaryFile' }})
    merge_operations: Optional[mergeoperations.MergeOperations] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mergeOperations' }})
    number_of_conflicts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberOfConflicts' }})
    object_type_conflict: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectTypeConflict' }})
    object_types: Optional[objecttypes.ObjectTypes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectTypes' }})
    
