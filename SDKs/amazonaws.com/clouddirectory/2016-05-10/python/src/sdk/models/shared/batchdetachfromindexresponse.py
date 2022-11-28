from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BatchDetachFromIndexResponse:
    r"""BatchDetachFromIndexResponse
    Represents the output of a <a>DetachFromIndex</a> response operation.
    """
    
    detached_object_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DetachedObjectIdentifier') }})
    
