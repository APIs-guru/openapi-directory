from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import relativefileversionenum_enum


@dataclass_json
@dataclass
class Location:
    file_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filePath' }})
    file_position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filePosition' }})
    relative_file_version: Optional[relativefileversionenum_enum.RelativeFileVersionEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relativeFileVersion' }})
    
