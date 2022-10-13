from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import servicefield_enum


@dataclass_json
@dataclass
class DescribeServicesRequest:
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster' }})
    include: Optional[List[servicefield_enum.ServiceFieldEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'include' }})
    services: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'services' }})
    
