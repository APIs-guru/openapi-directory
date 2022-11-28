from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class FullItemStateEnum(str, Enum):
    ARCHIVED = "ARCHIVED"
    DELETED = "DELETED"

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
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    

@dataclass_json
@dataclass
class FullItemUrls:
    href: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    primary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    

@dataclass_json
@dataclass
class FullItemVault:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class FullItem:
    category: FullItemCategoryEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    vault: FullItemVault = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vault') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    favorite: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('favorite') }})
    fields: Optional[List[Field]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    files: Optional[List[File]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_edited_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastEditedBy') }})
    sections: Optional[List[FullItemSections]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sections') }})
    state: Optional[FullItemStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    urls: Optional[List[FullItemUrls]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urls') }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclass
class FullItemInput:
    category: FullItemCategoryEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    vault: FullItemVault = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vault') }})
    favorite: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('favorite') }})
    fields: Optional[List[FieldInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    files: Optional[List[FileInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    sections: Optional[List[FullItemSections]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sections') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    urls: Optional[List[FullItemUrls]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urls') }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
