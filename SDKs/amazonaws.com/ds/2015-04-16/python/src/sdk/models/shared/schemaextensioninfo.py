from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import schemaextensionstatus_enum


@dataclass_json
@dataclass
class SchemaExtensionInfo:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    directory_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryId' }})
    end_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    schema_extension_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaExtensionId' }})
    schema_extension_status: Optional[schemaextensionstatus_enum.SchemaExtensionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaExtensionStatus' }})
    schema_extension_status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaExtensionStatusReason' }})
    start_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
