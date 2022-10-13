from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StageKey:
    rest_api_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restApiId' }})
    stage_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stageName' }})
    
