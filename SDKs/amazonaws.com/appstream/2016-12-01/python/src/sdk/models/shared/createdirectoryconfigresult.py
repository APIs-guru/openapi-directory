from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import directoryconfig


@dataclass_json
@dataclass
class CreateDirectoryConfigResult:
    directory_config: Optional[directoryconfig.DirectoryConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryConfig' }})
    
