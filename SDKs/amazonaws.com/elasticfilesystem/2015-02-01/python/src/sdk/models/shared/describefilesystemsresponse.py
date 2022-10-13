from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import filesystemdescription


@dataclass_json
@dataclass
class DescribeFileSystemsResponse:
    file_systems: Optional[List[filesystemdescription.FileSystemDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileSystems' }})
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marker' }})
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextMarker' }})
    
