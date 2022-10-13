from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import addressfamily_enum


@dataclass_json
@dataclass
class NewBgpPeer:
    address_family: Optional[addressfamily_enum.AddressFamilyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressFamily' }})
    amazon_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amazonAddress' }})
    asn: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asn' }})
    auth_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authKey' }})
    customer_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerAddress' }})
    
