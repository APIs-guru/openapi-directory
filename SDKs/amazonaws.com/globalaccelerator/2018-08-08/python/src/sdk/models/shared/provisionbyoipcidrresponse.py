from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import byoipcidr


@dataclass_json
@dataclass
class ProvisionByoipCidrResponse:
    byoip_cidr: Optional[byoipcidr.ByoipCidr] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ByoipCidr' }})
    
