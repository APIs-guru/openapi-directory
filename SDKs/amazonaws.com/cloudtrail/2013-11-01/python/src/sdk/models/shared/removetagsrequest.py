from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RemoveTagsRequest:
    r"""RemoveTagsRequest
    Specifies the tags to remove from a trail.
    """
    
    resource_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    tags_list: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagsList') }})
    
