from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BgpPeer:
    r"""BgpPeer
    Information about a BGP peer.
    """
    
    address_family: Optional[AddressFamilyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressFamily') }})
    amazon_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amazonAddress') }})
    asn: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asn') }})
    auth_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authKey') }})
    aws_device_v2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsDeviceV2') }})
    aws_logical_device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsLogicalDeviceId') }})
    bgp_peer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bgpPeerId') }})
    bgp_peer_state: Optional[BgpPeerStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bgpPeerState') }})
    bgp_status: Optional[BgpStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bgpStatus') }})
    customer_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerAddress') }})
    
