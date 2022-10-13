from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import serviceaccountcredentials


@dataclass_json
@dataclass
class DirectoryConfig:
    created_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    directory_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryName' }})
    organizational_unit_distinguished_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationalUnitDistinguishedNames' }})
    service_account_credentials: Optional[serviceaccountcredentials.ServiceAccountCredentials] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceAccountCredentials' }})
    
