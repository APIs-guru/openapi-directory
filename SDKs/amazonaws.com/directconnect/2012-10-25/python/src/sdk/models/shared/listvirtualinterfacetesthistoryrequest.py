from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListVirtualInterfaceTestHistoryRequest:
    bgp_peers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bgpPeers' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    test_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testId' }})
    virtual_interface_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualInterfaceId' }})
    
