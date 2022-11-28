from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Radios:
    r"""Radios
    Represents the set of radios and their states on a device. Examples of radios include Wi-Fi, GPS, Bluetooth, and NFC.
    """
    
    bluetooth: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bluetooth') }})
    gps: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gps') }})
    nfc: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nfc') }})
    wifi: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wifi') }})
    
