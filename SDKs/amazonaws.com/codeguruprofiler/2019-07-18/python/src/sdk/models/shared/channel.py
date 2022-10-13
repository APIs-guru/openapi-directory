from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import eventpublisher_enum


@dataclass_json
@dataclass
class Channel:
    event_publishers: List[eventpublisher_enum.EventPublisherEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventPublishers' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
