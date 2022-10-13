from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import eventsource_enum
from . import maximumexecutionfrequency_enum
from . import messagetype_enum


@dataclass_json
@dataclass
class SourceDetail:
    event_source: Optional[eventsource_enum.EventSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventSource' }})
    maximum_execution_frequency: Optional[maximumexecutionfrequency_enum.MaximumExecutionFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumExecutionFrequency' }})
    message_type: Optional[messagetype_enum.MessageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MessageType' }})
    
