from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import filemodetypeenum_enum


@dataclass_json
@dataclass
class GetFileOutput:
    blob_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blobId' }})
    commit_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commitId' }})
    file_content: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileContent' }})
    file_mode: filemodetypeenum_enum.FileModeTypeEnumEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileMode' }})
    file_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filePath' }})
    file_size: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileSize' }})
    
