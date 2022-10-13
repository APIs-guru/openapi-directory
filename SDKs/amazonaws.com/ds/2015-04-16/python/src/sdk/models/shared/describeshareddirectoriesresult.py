from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import shareddirectory


@dataclass_json
@dataclass
class DescribeSharedDirectoriesResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    shared_directories: Optional[List[shareddirectory.SharedDirectory]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SharedDirectories' }})
    
