from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SubmitAttachmentStateChangesRequest:
    attachments: List[AttachmentStateChange] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachments') }})
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    
