from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import recipientdetail


@dataclass_json
@dataclass
class SmsConfiguration:
    additional_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalMessage' }})
    recipients: List[recipientdetail.RecipientDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipients' }})
    sender_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'senderId' }})
    
