from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteTrustRequest:
    delete_associated_conditional_forwarder: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeleteAssociatedConditionalForwarder' }})
    trust_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrustId' }})
    
