from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetPullRequestOverrideStateOutput:
    overridden: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overridden' }})
    overrider: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overrider' }})
    
