from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import addressfamily_enum
from . import tag


@dataclass_json
@dataclass
class NewTransitVirtualInterface:
    address_family: Optional[addressfamily_enum.AddressFamilyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressFamily' }})
    amazon_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amazonAddress' }})
    asn: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asn' }})
    auth_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authKey' }})
    customer_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerAddress' }})
    direct_connect_gateway_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directConnectGatewayId' }})
    mtu: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mtu' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    virtual_interface_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualInterfaceName' }})
    vlan: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlan' }})
    
