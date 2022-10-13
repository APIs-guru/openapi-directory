from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import filemodetypeenum_enum
from . import replacementtypeenum_enum


@dataclass_json
@dataclass
class ReplaceContentEntry:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    file_mode: Optional[filemodetypeenum_enum.FileModeTypeEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileMode' }})
    file_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filePath' }})
    replacement_type: replacementtypeenum_enum.ReplacementTypeEnumEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replacementType' }})
    
