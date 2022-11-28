from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StartBgpFailoverTestRequest:
    virtual_interface_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualInterfaceId') }})
    bgp_peers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bgpPeers') }})
    test_duration_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testDurationInMinutes') }})
    
