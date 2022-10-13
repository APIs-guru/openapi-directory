from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import attachmentstatechange


@dataclass_json
@dataclass
class SubmitAttachmentStateChangesRequest:
    attachments: List[attachmentstatechange.AttachmentStateChange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachments' }})
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster' }})
    
