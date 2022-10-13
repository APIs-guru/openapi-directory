from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StartBlueprintRunRequest:
    blueprint_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BlueprintName' }})
    parameters: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    
