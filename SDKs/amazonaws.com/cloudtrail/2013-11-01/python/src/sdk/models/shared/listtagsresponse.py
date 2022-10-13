from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resourcetag


@dataclass_json
@dataclass
class ListTagsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    resource_tag_list: Optional[List[resourcetag.ResourceTag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceTagList' }})
    
