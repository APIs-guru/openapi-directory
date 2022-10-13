from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import addonhealth
from . import addonstatus_enum


@dataclass_json
@dataclass
class Addon:
    addon_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addonArn' }})
    addon_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addonName' }})
    addon_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addonVersion' }})
    cluster_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterName' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    health: Optional[addonhealth.AddonHealth] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'health' }})
    modified_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifiedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    service_account_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccountRoleArn' }})
    status: Optional[addonstatus_enum.AddonStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
