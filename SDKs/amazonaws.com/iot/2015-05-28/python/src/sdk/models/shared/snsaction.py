from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import messageformat_enum


@dataclass_json
@dataclass
class SnsAction:
    message_format: Optional[messageformat_enum.MessageFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageFormat' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    target_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetArn' }})
    
