from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ThingConnectivity:
    r"""ThingConnectivity
    The connectivity status of the thing.
    """
    
    connected: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connected') }})
    disconnect_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disconnectReason') }})
    timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    
