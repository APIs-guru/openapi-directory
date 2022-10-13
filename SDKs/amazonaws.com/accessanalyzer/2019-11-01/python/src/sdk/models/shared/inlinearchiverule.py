from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import criterion


@dataclass_json
@dataclass
class InlineArchiveRule:
    filter: dict[str, criterion.Criterion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    rule_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleName' }})
    
