from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListVirtualRoutersOutput:
    virtual_routers: List[VirtualRouterRef] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualRouters') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
