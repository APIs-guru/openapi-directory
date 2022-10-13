from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import filesystemendpoint
from . import filesystemendpoint


@dataclass_json
@dataclass
class FileSystemEndpoints:
    intercluster: Optional[filesystemendpoint.FileSystemEndpoint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Intercluster' }})
    management: Optional[filesystemendpoint.FileSystemEndpoint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Management' }})
    
