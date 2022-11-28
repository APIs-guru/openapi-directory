from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NetworkAccessConfiguration:
    r"""NetworkAccessConfiguration
    Describes the network details of the fleet or image builder instance.
    """
    
    eni_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EniId') }})
    eni_private_ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EniPrivateIpAddress') }})
    
