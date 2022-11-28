from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateBgpPeerRequest:
    new_bgp_peer: Optional[NewBgpPeer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newBGPPeer') }})
    virtual_interface_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualInterfaceId') }})
    
