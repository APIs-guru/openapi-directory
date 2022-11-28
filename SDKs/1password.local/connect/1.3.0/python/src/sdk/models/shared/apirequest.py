from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class APIRequestActionEnum(str, Enum):
    READ = "READ"
    CREATE = "CREATE"
    UPDATE = "UPDATE"
    DELETE = "DELETE"


@dataclass_json
@dataclass
class APIRequestActor:
    account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    jti: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jti') }})
    request_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestIp') }})
    user_agent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userAgent') }})
    

@dataclass_json
@dataclass
class APIRequestResourceItem:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
class APIRequestResourceTypeEnum(str, Enum):
    ITEM = "ITEM"
    VAULT = "VAULT"


@dataclass_json
@dataclass
class APIRequestResourceVault:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class APIRequestResource:
    item: Optional[APIRequestResourceItem] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item') }})
    item_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemVersion') }})
    type: Optional[APIRequestResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    vault: Optional[APIRequestResourceVault] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vault') }})
    
class APIRequestResultEnum(str, Enum):
    SUCCESS = "SUCCESS"
    DENY = "DENY"


@dataclass_json
@dataclass
class APIRequest:
    r"""APIRequest
    Represents a request that was made to the API. Including what Token was used and what resource was accessed.
    """
    
    action: Optional[APIRequestActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    actor: Optional[APIRequestActor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actor') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    resource: Optional[APIRequestResource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    result: Optional[APIRequestResultEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
