from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListInstanceGroupsInput:
    cluster_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterId' }})
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marker' }})
    
