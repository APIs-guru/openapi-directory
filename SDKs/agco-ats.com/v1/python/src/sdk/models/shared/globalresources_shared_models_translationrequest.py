from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GlobalResourcesSharedModelsTranslationRequestStateEnum(str, Enum):
    NOT_SUBMITTED = "NotSubmitted"
    SUBMITTED = "Submitted"
    CANCELLED = "Cancelled"
    COMPLETED = "Completed"


@dataclass_json
@dataclass
class GlobalResourcesSharedModelsTranslationRequest:
    r"""GlobalResourcesSharedModelsTranslationRequest
    A request to translate specified strings into specified locales
    """
    
    cc_email_addresses: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CCEmailAddresses') }, 'form': { 'field_name': 'CCEmailAddresses' }})
    charge_to_account: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChargeToAccount') }, 'form': { 'field_name': 'ChargeToAccount' }})
    deadline: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Deadline'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }, 'form': { 'field_name': 'Deadline' }})
    locale_ids: List[int] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocaleIds') }, 'form': { 'field_name': 'LocaleIds' }})
    notes: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }, 'form': { 'field_name': 'Notes' }})
    state: GlobalResourcesSharedModelsTranslationRequestStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }, 'form': { 'field_name': 'State' }})
    approval_user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApprovalUserId') }, 'form': { 'field_name': 'ApprovalUserId' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }, 'form': { 'field_name': 'Id' }})
    questions_user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuestionsUserId') }, 'form': { 'field_name': 'QuestionsUserId' }})
    submitted_by: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubmittedBy') }, 'form': { 'field_name': 'SubmittedBy' }})
    translator_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TranslatorEmail') }, 'form': { 'field_name': 'TranslatorEmail' }})
    translator_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TranslatorName') }, 'form': { 'field_name': 'TranslatorName' }})
    
