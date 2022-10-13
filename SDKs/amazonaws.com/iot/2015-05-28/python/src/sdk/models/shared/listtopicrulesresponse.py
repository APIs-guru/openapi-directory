from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import topicrulelistitem


@dataclass_json
@dataclass
class ListTopicRulesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    rules: Optional[List[topicrulelistitem.TopicRuleListItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    
