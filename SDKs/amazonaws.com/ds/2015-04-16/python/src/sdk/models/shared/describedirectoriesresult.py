from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import directorydescription


@dataclass_json
@dataclass
class DescribeDirectoriesResult:
    directory_descriptions: Optional[List[directorydescription.DirectoryDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryDescriptions' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
