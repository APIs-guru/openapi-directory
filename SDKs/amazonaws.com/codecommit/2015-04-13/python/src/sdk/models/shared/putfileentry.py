from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import filemodetypeenum_enum
from . import sourcefilespecifier


@dataclass_json
@dataclass
class PutFileEntry:
    file_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileContent' }})
    file_mode: Optional[filemodetypeenum_enum.FileModeTypeEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileMode' }})
    file_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filePath' }})
    source_file: Optional[sourcefilespecifier.SourceFileSpecifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceFile' }})
    
