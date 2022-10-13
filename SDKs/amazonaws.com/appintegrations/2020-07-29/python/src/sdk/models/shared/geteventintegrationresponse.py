from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import eventfilter


@dataclass_json
@dataclass
class GetEventIntegrationResponse:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    event_bridge_bus: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventBridgeBus' }})
    event_filter: Optional[eventfilter.EventFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventFilter' }})
    event_integration_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventIntegrationArn' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
