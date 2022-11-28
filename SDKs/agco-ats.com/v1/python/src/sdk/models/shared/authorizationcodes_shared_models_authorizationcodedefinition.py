from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AuthorizationCodesSharedModelsAuthorizationCodeDefinitionDurationUnitsEnum(str, Enum):
    WEEKS = "Weeks"
    DAYS = "Days"
    HOURS = "Hours"
    MINUTES = "Minutes"


@dataclass_json
@dataclass
class AuthorizationCodesSharedModelsAuthorizationCodeDefinition:
    r"""AuthorizationCodesSharedModelsAuthorizationCodeDefinition
    Represents the model used to define how a type of authorization code is generated.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    authorization_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthorizationID') }})
    created_by_user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedByUserID') }})
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_fields: Optional[List[AuthorizationCodesSharedModelsDataField]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataFields') }})
    deleted_by_user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeletedByUserID') }})
    deleted_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeletedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    duration_accuracy: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DurationAccuracy') }})
    duration_amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DurationAmount') }})
    duration_units: Optional[AuthorizationCodesSharedModelsAuthorizationCodeDefinitionDurationUnitsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DurationUnits') }})
    hash_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HashLength') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ID') }})
    is_deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsDeleted') }})
    random_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RandomLength') }})
    validation_fields: Optional[List[AuthorizationCodesSharedModelsValidationField]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationFields') }})
    
