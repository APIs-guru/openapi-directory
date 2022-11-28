from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NewBgpPeer:
    r"""NewBgpPeer
    Information about a new BGP peer.
    """
    
    address_family: Optional[AddressFamilyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressFamily') }})
    amazon_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amazonAddress') }})
    asn: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asn') }})
    auth_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authKey') }})
    customer_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerAddress') }})
    
