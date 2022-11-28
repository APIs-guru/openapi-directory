from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AllocateConnectionOnInterconnectRequest:
    bandwidth: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandwidth') }})
    connection_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionName') }})
    interconnect_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interconnectId') }})
    owner_account: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerAccount') }})
    vlan: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlan') }})
    
