from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import attachmentitem
from . import participantrole_enum
from . import chatitemtype_enum


@dataclass_json
@dataclass
class Item:
    absolute_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AbsoluteTime' }})
    attachments: Optional[List[attachmentitem.AttachmentItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attachments' }})
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Content' }})
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContentType' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayName' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    participant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParticipantId' }})
    participant_role: Optional[participantrole_enum.ParticipantRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParticipantRole' }})
    type: Optional[chatitemtype_enum.ChatItemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
