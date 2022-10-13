from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import globalresources_shared_models_translationsetattribute

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
    attributes: Optional[List[globalresources_shared_models_translationsetattribute.GlobalResourcesSharedModelsTranslationSetAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attributes' }})
    file_i_ds: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileIDs' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    in_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    out_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state: GlobalResourcesSharedModelsTranslationSetStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    translation_request_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TranslationRequestID' }})
    
