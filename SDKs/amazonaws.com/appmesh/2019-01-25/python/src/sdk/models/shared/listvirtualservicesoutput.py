from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListVirtualServicesOutput:
    r"""ListVirtualServicesOutput
    <zonbook></zonbook><xhtml></xhtml>
    """
    
    virtual_services: List[VirtualServiceRef] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualServices') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
