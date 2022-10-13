from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import lambdaeventsourcetype_enum


@dataclass_json
@dataclass
class LambdaEventSource:
    topic: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topic' }})
    type: lambdaeventsourcetype_enum.LambdaEventSourceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
