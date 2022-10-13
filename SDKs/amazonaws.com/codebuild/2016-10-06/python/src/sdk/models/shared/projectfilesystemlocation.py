from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import filesystemtype_enum


@dataclass_json
@dataclass
class ProjectFileSystemLocation:
    identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifier' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    mount_options: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mountOptions' }})
    mount_point: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mountPoint' }})
    type: Optional[filesystemtype_enum.FileSystemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
