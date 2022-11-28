from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListTagsResponse:
    r"""ListTagsResponse
    Returns the objects or data listed below if successful. Otherwise, returns an error.
    """
    
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    resource_tag_list: Optional[List[ResourceTag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceTagList') }})
    
