from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AuthorizationCodesSharedModelsAuthorizationContactInformation:
    authorization_code_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthorizationCodeID') }, 'form': { 'field_name': 'AuthorizationCodeID' }})
    contact: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Contact') }, 'form': { 'field_name': 'Contact' }})
    dealer_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DealerCode') }, 'form': { 'field_name': 'DealerCode' }})
    dealership: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Dealership') }, 'form': { 'field_name': 'Dealership' }})
    phone: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Phone') }, 'form': { 'field_name': 'Phone' }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Code') }, 'form': { 'field_name': 'Code' }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedBy') }, 'form': { 'field_name': 'CreatedBy' }})
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }, 'form': { 'field_name': 'CreatedDate' }})
    definition_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefinitionName') }, 'form': { 'field_name': 'DefinitionName' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Email') }, 'form': { 'field_name': 'Email' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ID') }, 'form': { 'field_name': 'ID' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }, 'form': { 'field_name': 'Notes' }})
    
