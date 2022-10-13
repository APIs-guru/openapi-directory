from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateMitigationActionResponse:
    action_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionArn' }})
    action_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionId' }})
    
