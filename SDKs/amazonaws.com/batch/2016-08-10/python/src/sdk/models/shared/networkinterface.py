from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NetworkInterface:
    attachment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachmentId' }})
    ipv6_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipv6Address' }})
    private_ipv4_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateIpv4Address' }})
    
