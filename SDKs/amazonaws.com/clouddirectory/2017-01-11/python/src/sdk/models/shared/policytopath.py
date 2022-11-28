from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PolicyToPath:
    r"""PolicyToPath
    Used when a regular object exists in a <a>Directory</a> and you want to find all of the policies that are associated with that object and the parent to that object.
    """
    
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Path') }})
    policies: Optional[List[PolicyAttachment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Policies') }})
    
