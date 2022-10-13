from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import authorizationcodes_shared_models_datafield
from . import authorizationcodes_shared_models_validationfield

class AuthorizationCodesSharedModelsAuthorizationCodeDefinitionDurationUnitsEnum(str, Enum):
    WEEKS = "Weeks"
    DAYS = "Days"
    HOURS = "Hours"
    MINUTES = "Minutes"


@dataclass_json
@dataclass
class AuthorizationCodesSharedModelsAuthorizationCodeDefinition:
    authorization_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthorizationID' }})
    created_by_user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedByUserID' }})
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_fields: Optional[List[authorizationcodes_shared_models_datafield.AuthorizationCodesSharedModelsDataField]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataFields' }})
    deleted_by_user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeletedByUserID' }})
    deleted_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeletedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    duration_accuracy: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DurationAccuracy' }})
    duration_amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DurationAmount' }})
    duration_units: Optional[AuthorizationCodesSharedModelsAuthorizationCodeDefinitionDurationUnitsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DurationUnits' }})
    hash_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HashLength' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ID' }})
    is_deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsDeleted' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    random_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RandomLength' }})
    validation_fields: Optional[List[authorizationcodes_shared_models_validationfield.AuthorizationCodesSharedModelsValidationField]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidationFields' }})
    
