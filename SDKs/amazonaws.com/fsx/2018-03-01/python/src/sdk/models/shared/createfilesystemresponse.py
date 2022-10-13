from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import filesystem


@dataclass_json
@dataclass
class CreateFileSystemResponse:
    file_system: Optional[filesystem.FileSystem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileSystem' }})
    
