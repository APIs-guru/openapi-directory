from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import keyschema
from . import provisionedthroughputdescription
from . import tablestatus_enum


@dataclass_json
@dataclass
class TableDescription:
    creation_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    item_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ItemCount' }})
    key_schema: Optional[keyschema.KeySchema] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeySchema' }})
    provisioned_throughput: Optional[provisionedthroughputdescription.ProvisionedThroughputDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedThroughput' }})
    table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    table_size_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableSizeBytes' }})
    table_status: Optional[tablestatus_enum.TableStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableStatus' }})
    
