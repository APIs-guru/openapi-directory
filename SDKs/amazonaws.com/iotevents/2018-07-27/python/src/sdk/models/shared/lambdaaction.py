from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import payload


@dataclass_json
@dataclass
class LambdaAction:
    function_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'functionArn' }})
    payload: Optional[payload.Payload] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payload' }})
    
