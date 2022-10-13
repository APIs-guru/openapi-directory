from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import addressfamily_enum
from . import routefilterprefix
from . import tag


@dataclass_json
@dataclass
class NewPublicVirtualInterfaceAllocation:
    address_family: Optional[addressfamily_enum.AddressFamilyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressFamily' }})
    amazon_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amazonAddress' }})
    asn: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asn' }})
    auth_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authKey' }})
    customer_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerAddress' }})
    route_filter_prefixes: Optional[List[routefilterprefix.RouteFilterPrefix]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routeFilterPrefixes' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    virtual_interface_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualInterfaceName' }})
    vlan: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vlan' }})
    
