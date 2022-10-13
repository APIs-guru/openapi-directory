from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import virtualserviceref


@dataclass_json
@dataclass
class ListVirtualServicesOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    virtual_services: List[virtualserviceref.VirtualServiceRef] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualServices' }})
    
