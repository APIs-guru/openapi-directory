from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EventCategoryGroup:
    event_categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventCategories' }})
    source_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceType' }})
    
