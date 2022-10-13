from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class DeleteTagsRequest:
    configuration_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configurationIds' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
