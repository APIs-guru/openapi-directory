from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import identityprovidertypetype_enum


@dataclass_json
@dataclass
class IdentityProviderType:
    attribute_mapping: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeMapping' }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    idp_identifiers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdpIdentifiers' }})
    last_modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    provider_details: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProviderDetails' }})
    provider_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProviderName' }})
    provider_type: Optional[identityprovidertypetype_enum.IdentityProviderTypeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProviderType' }})
    user_pool_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserPoolId' }})
    
