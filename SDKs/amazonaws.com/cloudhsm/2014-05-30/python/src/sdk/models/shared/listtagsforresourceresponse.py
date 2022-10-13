from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class ListTagsForResourceResponse:
    tag_list: List[tag.Tag] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TagList' }})
    
