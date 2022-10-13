from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class CreateMatchmakingRuleSetInput:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    rule_set_body: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleSetBody' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
