from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StartBgpFailoverTestRequest:
    bgp_peers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bgpPeers' }})
    test_duration_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testDurationInMinutes' }})
    virtual_interface_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualInterfaceId' }})
    
