from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import inspectorevent_enum


@dataclass_json
@dataclass
class SubscribeToEventRequest:
    event: inspectorevent_enum.InspectorEventEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event' }})
    resource_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceArn' }})
    topic_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topicArn' }})
    
