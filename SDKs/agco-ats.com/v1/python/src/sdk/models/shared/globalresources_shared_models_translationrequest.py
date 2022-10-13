from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GlobalResourcesSharedModelsTranslationRequestStateEnum(str, Enum):
    NOT_SUBMITTED = "NotSubmitted"
    SUBMITTED = "Submitted"
    CANCELLED = "Cancelled"
    COMPLETED = "Completed"


@dataclass_json
@dataclass
class GlobalResourcesSharedModelsTranslationRequest:
    approval_user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApprovalUserId' }, 'form': { 'field_name': 'ApprovalUserId' }})
    cc_email_addresses: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CCEmailAddresses' }, 'form': { 'field_name': 'CCEmailAddresses' }})
    charge_to_account: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChargeToAccount' }, 'form': { 'field_name': 'ChargeToAccount' }})
    deadline: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Deadline', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }, 'form': { 'field_name': 'Deadline' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }, 'form': { 'field_name': 'Id' }})
    locale_ids: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocaleIds' }, 'form': { 'field_name': 'LocaleIds' }})
    notes: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }, 'form': { 'field_name': 'Notes' }})
    questions_user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QuestionsUserId' }, 'form': { 'field_name': 'QuestionsUserId' }})
    state: GlobalResourcesSharedModelsTranslationRequestStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }, 'form': { 'field_name': 'State' }})
    submitted_by: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubmittedBy' }, 'form': { 'field_name': 'SubmittedBy' }})
    translator_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TranslatorEmail' }, 'form': { 'field_name': 'TranslatorEmail' }})
    translator_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TranslatorName' }, 'form': { 'field_name': 'TranslatorName' }})
    
