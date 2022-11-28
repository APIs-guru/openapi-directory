from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PortRange:
    r"""PortRange
    A list of port ranges that are permitted to allow inbound traffic from all public IP addresses. To specify a single port, use the same value for <code>MinRange</code> and <code>MaxRange</code>.
    """
    
    min_range: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinRange') }})
    max_range: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxRange') }})
    
