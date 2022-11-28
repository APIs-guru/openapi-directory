from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteVirtualRouterOutput:
    r"""DeleteVirtualRouterOutput
    <zonbook></zonbook><xhtml></xhtml>
    """
    
    virtual_router: VirtualRouterData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualRouter') }})
    
