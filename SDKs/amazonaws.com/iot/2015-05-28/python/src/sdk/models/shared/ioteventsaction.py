from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IotEventsAction:
    batch_mode: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchMode' }})
    input_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputName' }})
    message_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageId' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    
