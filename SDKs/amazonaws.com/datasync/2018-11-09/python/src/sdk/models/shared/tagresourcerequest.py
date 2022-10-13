from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import taglistentry


@dataclass_json
@dataclass
class TagResourceRequest:
    resource_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceArn' }})
    tags: List[taglistentry.TagListEntry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
