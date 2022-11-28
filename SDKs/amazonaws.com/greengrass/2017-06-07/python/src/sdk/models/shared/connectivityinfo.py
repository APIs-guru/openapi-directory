from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ConnectivityInfo:
    r"""ConnectivityInfo
    Information about a Greengrass core's connectivity.
    """
    
    host_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HostAddress') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    metadata: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Metadata') }})
    port_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortNumber') }})
    
