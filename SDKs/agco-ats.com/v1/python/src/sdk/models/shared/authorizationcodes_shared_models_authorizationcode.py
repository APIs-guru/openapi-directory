from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import authorizationcodes_shared_models_parameter
from . import authorizationcodes_shared_models_parameter


@dataclass_json
@dataclass
class AuthorizationCodesSharedModelsAuthorizationCode:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    created_by_user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedByUserID' }})
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_parameters: Optional[List[authorizationcodes_shared_models_parameter.AuthorizationCodesSharedModelsParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataParameters' }})
    definition_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefinitionID' }})
    deleted_by_user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeletedByUserID' }})
    deleted_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeletedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    effective_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EffectiveDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ID' }})
    is_deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsDeleted' }})
    validation_parameters: Optional[List[authorizationcodes_shared_models_parameter.AuthorizationCodesSharedModelsParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidationParameters' }})
    
