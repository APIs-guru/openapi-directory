from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import organizationresourcestatus_enum


@dataclass_json
@dataclass
class OrganizationConformancePackStatus:
    error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorCode' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorMessage' }})
    last_update_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    organization_conformance_pack_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationConformancePackName' }})
    status: organizationresourcestatus_enum.OrganizationResourceStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
