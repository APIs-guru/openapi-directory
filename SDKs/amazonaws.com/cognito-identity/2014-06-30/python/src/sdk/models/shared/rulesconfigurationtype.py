from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import mappingrule


@dataclass_json
@dataclass
class RulesConfigurationType:
    rules: List[mappingrule.MappingRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Rules' }})
    
