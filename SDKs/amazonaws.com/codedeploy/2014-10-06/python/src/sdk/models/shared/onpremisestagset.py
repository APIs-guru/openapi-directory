from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OnPremisesTagSet:
    r"""OnPremisesTagSet
    Information about groups of on-premises instance tags.
    """
    
    on_premises_tag_set_list: Optional[List[List[TagFilter]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onPremisesTagSetList') }})
    
