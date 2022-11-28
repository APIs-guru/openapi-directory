from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NewTransitVirtualInterface:
    r"""NewTransitVirtualInterface
    Information about a transit virtual interface.
    """
    
    address_family: Optional[AddressFamilyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressFamily') }})
    amazon_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amazonAddress') }})
    asn: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asn') }})
    auth_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authKey') }})
    customer_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerAddress') }})
    direct_connect_gateway_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directConnectGatewayId') }})
    mtu: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mtu') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    virtual_interface_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualInterfaceName') }})
    vlan: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlan') }})
    
