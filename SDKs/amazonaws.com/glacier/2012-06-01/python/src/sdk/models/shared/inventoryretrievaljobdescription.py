from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InventoryRetrievalJobDescription:
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndDate' }})
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Format' }})
    limit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marker' }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartDate' }})
    
