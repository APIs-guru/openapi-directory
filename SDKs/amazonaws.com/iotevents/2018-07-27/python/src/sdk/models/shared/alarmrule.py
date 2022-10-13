from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import simplerule


@dataclass_json
@dataclass
class AlarmRule:
    simple_rule: Optional[simplerule.SimpleRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'simpleRule' }})
    
