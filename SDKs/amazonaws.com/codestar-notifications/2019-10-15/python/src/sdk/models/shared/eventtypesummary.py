from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EventTypeSummary:
    event_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventTypeId' }})
    event_type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventTypeName' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceType' }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceName' }})
    
