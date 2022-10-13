from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ScpActionDefinition:
    policy_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyId' }})
    target_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetIds' }})
    
