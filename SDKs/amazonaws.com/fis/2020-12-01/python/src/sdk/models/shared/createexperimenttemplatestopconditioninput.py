from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateExperimentTemplateStopConditionInput:
    source: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
