from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class RemoveTagsFromOnPremisesInstancesInput:
    instance_names: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceNames' }})
    tags: List[tag.Tag] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
