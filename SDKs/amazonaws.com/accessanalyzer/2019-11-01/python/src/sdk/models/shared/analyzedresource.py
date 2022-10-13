from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import resourcetype_enum
from . import findingstatus_enum


@dataclass_json
@dataclass
class AnalyzedResource:
    actions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    analyzed_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'analyzedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    is_public: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isPublic' }})
    resource_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceArn' }})
    resource_owner_account: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceOwnerAccount' }})
    resource_type: resourcetype_enum.ResourceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    shared_via: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sharedVia' }})
    status: Optional[findingstatus_enum.FindingStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    updated_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
