from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import mitigationactionparams


@dataclass_json
@dataclass
class MitigationAction:
    action_params: Optional[mitigationactionparams.MitigationActionParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionParams' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    
