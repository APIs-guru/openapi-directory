from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Radios:
    bluetooth: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bluetooth' }})
    gps: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gps' }})
    nfc: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nfc' }})
    wifi: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wifi' }})
    
