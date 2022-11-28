from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchListObjectAttributesResponse:
    r"""BatchListObjectAttributesResponse
    Represents the output of a <a>ListObjectAttributes</a> response operation.
    """
    
    attributes: Optional[List[AttributeKeyAndValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
