from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Location:
    r"""Location
    Information about an Direct Connect location.
    """
    
    available_mac_sec_port_speeds: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableMacSecPortSpeeds') }})
    available_port_speeds: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availablePortSpeeds') }})
    available_providers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableProviders') }})
    location_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationCode') }})
    location_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationName') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    
