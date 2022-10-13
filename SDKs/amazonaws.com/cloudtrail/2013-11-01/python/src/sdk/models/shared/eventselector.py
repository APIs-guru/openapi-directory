from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import dataresource
from . import readwritetype_enum


@dataclass_json
@dataclass
class EventSelector:
    data_resources: Optional[List[dataresource.DataResource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataResources' }})
    exclude_management_event_sources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExcludeManagementEventSources' }})
    include_management_events: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncludeManagementEvents' }})
    read_write_type: Optional[readwritetype_enum.ReadWriteTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReadWriteType' }})
    
