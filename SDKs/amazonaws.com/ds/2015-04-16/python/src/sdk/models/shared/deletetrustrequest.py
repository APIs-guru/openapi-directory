from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteTrustRequest:
    r"""DeleteTrustRequest
    Deletes the local side of an existing trust relationship between the Managed Microsoft AD directory and the external domain.
    """
    
    trust_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrustId') }})
    delete_associated_conditional_forwarder: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeleteAssociatedConditionalForwarder') }})
    
