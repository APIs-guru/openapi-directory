from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import advancedeventselector
from . import eventselector


@dataclass_json
@dataclass
class PutEventSelectorsRequest:
    advanced_event_selectors: Optional[List[advancedeventselector.AdvancedEventSelector]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdvancedEventSelectors' }})
    event_selectors: Optional[List[eventselector.EventSelector]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventSelectors' }})
    trail_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrailName' }})
    
