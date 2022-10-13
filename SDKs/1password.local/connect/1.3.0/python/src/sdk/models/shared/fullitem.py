from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import field
from . import file

class FullItemCategoryEnum(str, Enum):
    LOGIN = "LOGIN"
    PASSWORD = "PASSWORD"
    API_CREDENTIAL = "API_CREDENTIAL"
    SERVER = "SERVER"
    DATABASE = "DATABASE"
    CREDIT_CARD = "CREDIT_CARD"
    MEMBERSHIP = "MEMBERSHIP"
    PASSPORT = "PASSPORT"
    SOFTWARE_LICENSE = "SOFTWARE_LICENSE"
    OUTDOOR_LICENSE = "OUTDOOR_LICENSE"
    SECURE_NOTE = "SECURE_NOTE"
    WIRELESS_ROUTER = "WIRELESS_ROUTER"
    BANK_ACCOUNT = "BANK_ACCOUNT"
    DRIVER_LICENSE = "DRIVER_LICENSE"
    IDENTITY = "IDENTITY"
    REWARD_PROGRAM = "REWARD_PROGRAM"
    DOCUMENT = "DOCUMENT"
    EMAIL_ACCOUNT = "EMAIL_ACCOUNT"
    SOCIAL_SECURITY_NUMBER = "SOCIAL_SECURITY_NUMBER"
    CUSTOM = "CUSTOM"


@dataclass_json
@dataclass
class FullItemSections:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    
class FullItemStateEnum(str, Enum):
    ARCHIVED = "ARCHIVED"
    DELETED = "DELETED"


@dataclass_json
@dataclass
class FullItemUrls:
    href: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    primary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary' }})
    

@dataclass_json
@dataclass
class FullItemVault:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class FullItem:
    category: FullItemCategoryEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    favorite: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'favorite' }})
    fields: Optional[List[field.Field]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    files: Optional[List[file.File]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'files' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_edited_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastEditedBy' }})
    sections: Optional[List[FullItemSections]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sections' }})
    state: Optional[FullItemStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    urls: Optional[List[FullItemUrls]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urls' }})
    vault: FullItemVault = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vault' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
