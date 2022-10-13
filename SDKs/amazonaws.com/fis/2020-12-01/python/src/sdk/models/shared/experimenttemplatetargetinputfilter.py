from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ExperimentTemplateTargetInputFilter:
    path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    values: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
