from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UntagResourceRequest:
    r"""UntagResourceRequest
    The request object for <code>UntagResource</code> action.
    """
    
    resource_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceARN') }})
    tag_keys: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagKeys') }})
    
