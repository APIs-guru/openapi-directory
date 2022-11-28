from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BatchListPolicyAttachmentsResponse:
    r"""BatchListPolicyAttachmentsResponse
    Represents the output of a <a>ListPolicyAttachments</a> response operation.
    """
    
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    object_identifiers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ObjectIdentifiers') }})
    
