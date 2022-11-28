from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VirtualServiceSpec:
    r"""VirtualServiceSpec
    An object that represents the specification of a virtual service.
    """
    
    provider: Optional[VirtualServiceProvider] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    
