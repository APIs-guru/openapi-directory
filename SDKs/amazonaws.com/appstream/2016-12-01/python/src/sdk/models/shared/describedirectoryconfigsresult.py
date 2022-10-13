from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import directoryconfig


@dataclass_json
@dataclass
class DescribeDirectoryConfigsResult:
    directory_configs: Optional[List[directoryconfig.DirectoryConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryConfigs' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
