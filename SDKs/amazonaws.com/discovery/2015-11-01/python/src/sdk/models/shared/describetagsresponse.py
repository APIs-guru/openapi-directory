from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import configurationtag


@dataclass_json
@dataclass
class DescribeTagsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    tags: Optional[List[configurationtag.ConfigurationTag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
