from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OutputResources:
    r"""OutputResources
    The resources produced by this image.
    """
    
    amis: Optional[List[Ami]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amis') }})
    containers: Optional[List[Container]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containers') }})
    
