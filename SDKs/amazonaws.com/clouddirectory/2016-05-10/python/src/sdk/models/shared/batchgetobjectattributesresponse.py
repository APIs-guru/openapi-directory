from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchGetObjectAttributesResponse:
    r"""BatchGetObjectAttributesResponse
    Represents the output of a <a>GetObjectAttributes</a> response operation.
    """
    
    attributes: Optional[List[AttributeKeyAndValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    
