from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RuleMetadata:
    long_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LongDescription' }})
    rule_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleId' }})
    rule_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleName' }})
    rule_tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleTags' }})
    short_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShortDescription' }})
    
