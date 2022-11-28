from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DNSServiceDiscovery:
    r"""DNSServiceDiscovery
    An object that represents the DNS service discovery information for your virtual node.
    """
    
    hostname: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    response_type: Optional[DNSResponseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseType') }})
    
