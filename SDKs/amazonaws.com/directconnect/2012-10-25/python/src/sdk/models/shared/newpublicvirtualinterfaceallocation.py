from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NewPublicVirtualInterfaceAllocation:
    r"""NewPublicVirtualInterfaceAllocation
    Information about a public virtual interface to be provisioned on a connection.
    """
    
    asn: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('asn') }})
    virtual_interface_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualInterfaceName') }})
    vlan: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlan') }})
    address_family: Optional[AddressFamilyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressFamily') }})
    amazon_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amazonAddress') }})
    auth_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authKey') }})
    customer_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerAddress') }})
    route_filter_prefixes: Optional[List[RouteFilterPrefix]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routeFilterPrefixes') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
