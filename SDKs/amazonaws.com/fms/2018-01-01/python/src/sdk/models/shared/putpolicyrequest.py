from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import policy
from . import tag


@dataclass_json
@dataclass
class PutPolicyRequest:
    policy: policy.Policy = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Policy' }})
    tag_list: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TagList' }})
    
