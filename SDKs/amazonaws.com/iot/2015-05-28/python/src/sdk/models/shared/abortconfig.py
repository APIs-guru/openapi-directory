from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import abortcriteria


@dataclass_json
@dataclass
class AbortConfig:
    criteria_list: List[abortcriteria.AbortCriteria] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'criteriaList' }})
    
