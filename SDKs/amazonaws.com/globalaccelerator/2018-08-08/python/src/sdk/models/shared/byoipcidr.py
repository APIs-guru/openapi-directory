from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import byoipcidrevent
from . import byoipcidrstate_enum


@dataclass_json
@dataclass
class ByoipCidr:
    cidr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Cidr' }})
    events: Optional[List[byoipcidrevent.ByoipCidrEvent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Events' }})
    state: Optional[byoipcidrstate_enum.ByoipCidrStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    
