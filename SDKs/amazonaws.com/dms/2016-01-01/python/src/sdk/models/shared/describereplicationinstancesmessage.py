from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import filter


@dataclass_json
@dataclass
class DescribeReplicationInstancesMessage:
    filters: Optional[List[filter.Filter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filters' }})
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marker' }})
    max_records: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxRecords' }})
    
