from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import directory


@dataclass_json
@dataclass
class GetDirectoryResponse:
    directory: directory.Directory = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Directory' }})
    
