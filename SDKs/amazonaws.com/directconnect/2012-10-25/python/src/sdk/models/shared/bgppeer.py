from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import addressfamily_enum
from . import bgppeerstate_enum
from . import bgpstatus_enum


@dataclass_json
@dataclass
class BgpPeer:
    address_family: Optional[addressfamily_enum.AddressFamilyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressFamily' }})
    amazon_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amazonAddress' }})
    asn: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asn' }})
    auth_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authKey' }})
    aws_device_v2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsDeviceV2' }})
    aws_logical_device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsLogicalDeviceId' }})
    bgp_peer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bgpPeerId' }})
    bgp_peer_state: Optional[bgppeerstate_enum.BgpPeerStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bgpPeerState' }})
    bgp_status: Optional[bgpstatus_enum.BgpStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bgpStatus' }})
    customer_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerAddress' }})
    
