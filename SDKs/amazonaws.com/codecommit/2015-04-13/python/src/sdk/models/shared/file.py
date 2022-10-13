from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import filemodetypeenum_enum


@dataclass_json
@dataclass
class File:
    absolute_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'absolutePath' }})
    blob_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blobId' }})
    file_mode: Optional[filemodetypeenum_enum.FileModeTypeEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileMode' }})
    relative_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relativePath' }})
    
