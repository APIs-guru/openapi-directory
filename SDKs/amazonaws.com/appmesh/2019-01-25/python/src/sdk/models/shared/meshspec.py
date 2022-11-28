from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MeshSpec:
    r"""MeshSpec
    An object that represents the specification of a service mesh.
    """
    
    egress_filter: Optional[EgressFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('egressFilter') }})
    
