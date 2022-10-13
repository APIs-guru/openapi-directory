from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import filemodetypeenum_enum


@dataclass_json
@dataclass
class SetFileModeEntry:
    file_mode: filemodetypeenum_enum.FileModeTypeEnumEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileMode' }})
    file_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filePath' }})
    
