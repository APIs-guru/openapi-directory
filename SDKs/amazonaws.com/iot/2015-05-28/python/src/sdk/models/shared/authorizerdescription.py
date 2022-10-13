from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import authorizerstatus_enum


@dataclass_json
@dataclass
class AuthorizerDescription:
    authorizer_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizerArn' }})
    authorizer_function_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizerFunctionArn' }})
    authorizer_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizerName' }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    signing_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signingDisabled' }})
    status: Optional[authorizerstatus_enum.AuthorizerStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    token_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokenKeyName' }})
    token_signing_public_keys: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokenSigningPublicKeys' }})
    
