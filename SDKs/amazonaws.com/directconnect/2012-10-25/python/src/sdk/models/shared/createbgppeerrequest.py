from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import newbgppeer


@dataclass_json
@dataclass
class CreateBgpPeerRequest:
    new_bgp_peer: Optional[newbgppeer.NewBgpPeer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newBGPPeer' }})
    virtual_interface_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualInterfaceId' }})
    
