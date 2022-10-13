from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import iotjobabortcriteria


@dataclass_json
@dataclass
class IoTJobAbortConfig:
    criteria_list: List[iotjobabortcriteria.IoTJobAbortCriteria] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'criteriaList' }})
    
