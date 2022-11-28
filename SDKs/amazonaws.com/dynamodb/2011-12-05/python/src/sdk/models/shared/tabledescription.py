from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TableDescription:
    creation_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    item_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ItemCount') }})
    key_schema: Optional[KeySchema] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeySchema') }})
    provisioned_throughput: Optional[ProvisionedThroughputDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedThroughput') }})
    table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    table_size_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableSizeBytes') }})
    table_status: Optional[TableStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableStatus') }})
    
