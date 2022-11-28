from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Item:
    r"""Item
    An item - message or event - that has been sent. 
    """
    
    absolute_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AbsoluteTime') }})
    attachments: Optional[List[AttachmentItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attachments') }})
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Content') }})
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContentType') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisplayName') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    participant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParticipantId') }})
    participant_role: Optional[ParticipantRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParticipantRole') }})
    type: Optional[ChatItemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
