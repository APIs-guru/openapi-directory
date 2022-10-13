from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteBgpPeerRequest:
    asn: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asn' }})
    bgp_peer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bgpPeerId' }})
    customer_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerAddress' }})
    virtual_interface_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualInterfaceId' }})
    
