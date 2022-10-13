from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import billingmode_enum
from . import keyschemaelement
from . import provisionedthroughput


@dataclass_json
@dataclass
class SourceTableDetails:
    billing_mode: Optional[billingmode_enum.BillingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BillingMode' }})
    item_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ItemCount' }})
    key_schema: List[keyschemaelement.KeySchemaElement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeySchema' }})
    provisioned_throughput: provisionedthroughput.ProvisionedThroughput = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedThroughput' }})
    table_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableArn' }})
    table_creation_date_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableCreationDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    table_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableId' }})
    table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    table_size_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableSizeBytes' }})
    
