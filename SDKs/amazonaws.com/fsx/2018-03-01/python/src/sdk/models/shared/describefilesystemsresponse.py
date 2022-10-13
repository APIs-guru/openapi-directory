from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import filesystem


@dataclass_json
@dataclass
class DescribeFileSystemsResponse:
    file_systems: Optional[List[filesystem.FileSystem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileSystems' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
