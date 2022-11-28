from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IPSet:
    r"""IPSet
    A complex type for the set of IP addresses for an accelerator.
    """
    
    ip_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpAddresses') }})
    ip_family: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpFamily') }})
    
