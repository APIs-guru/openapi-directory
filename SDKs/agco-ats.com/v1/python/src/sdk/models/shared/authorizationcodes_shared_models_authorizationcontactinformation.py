from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AuthorizationCodesSharedModelsAuthorizationContactInformation:
    authorization_code_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthorizationCodeID' }, 'form': { 'field_name': 'AuthorizationCodeID' }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }, 'form': { 'field_name': 'Code' }})
    contact: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Contact' }, 'form': { 'field_name': 'Contact' }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedBy' }, 'form': { 'field_name': 'CreatedBy' }})
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }, 'form': { 'field_name': 'CreatedDate' }})
    dealer_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DealerCode' }, 'form': { 'field_name': 'DealerCode' }})
    dealership: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Dealership' }, 'form': { 'field_name': 'Dealership' }})
    definition_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefinitionName' }, 'form': { 'field_name': 'DefinitionName' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Email' }, 'form': { 'field_name': 'Email' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ID' }, 'form': { 'field_name': 'ID' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }, 'form': { 'field_name': 'Notes' }})
    phone: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Phone' }, 'form': { 'field_name': 'Phone' }})
    
