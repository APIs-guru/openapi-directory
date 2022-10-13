from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DomainStats:
    metering_profile_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MeteringProfileCount' }})
    object_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ObjectCount' }})
    profile_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProfileCount' }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalSize' }})
    
