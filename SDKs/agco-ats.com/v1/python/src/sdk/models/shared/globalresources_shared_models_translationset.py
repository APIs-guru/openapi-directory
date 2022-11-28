from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GlobalResourcesSharedModelsTranslationSetStateEnum(str, Enum):
    OUT_FOR_PROCESSING = "OutForProcessing"
    PROCESSING = "Processing"
    PENDING_APPROVAL = "PendingApproval"
    OUT_FOR_TRANSLATION = "OutForTranslation"
    CANCELLED = "Cancelled"
    COMPLETED = "Completed"


@dataclass_json
@dataclass
class GlobalResourcesSharedModelsTranslationSet:
    r"""GlobalResourcesSharedModelsTranslationSet
    A set of strings submitted for translation
    """
    
    file_i_ds: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileIDs') }})
    state: GlobalResourcesSharedModelsTranslationSetStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    attributes: Optional[List[GlobalResourcesSharedModelsTranslationSetAttribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attributes') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    in_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    out_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    translation_request_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TranslationRequestID') }})
    
