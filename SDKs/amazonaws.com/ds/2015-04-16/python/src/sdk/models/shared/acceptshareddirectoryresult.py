from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import shareddirectory


@dataclass_json
@dataclass
class AcceptSharedDirectoryResult:
    shared_directory: Optional[shareddirectory.SharedDirectory] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SharedDirectory' }})
    
