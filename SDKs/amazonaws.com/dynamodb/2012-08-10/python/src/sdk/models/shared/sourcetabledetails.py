from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SourceTableDetails:
    r"""SourceTableDetails
    Contains the details of the table when the backup was created. 
    """
    
    key_schema: List[KeySchemaElement] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeySchema') }})
    provisioned_throughput: ProvisionedThroughput = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedThroughput') }})
    table_creation_date_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableCreationDateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    table_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableId') }})
    table_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    billing_mode: Optional[BillingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BillingMode') }})
    item_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ItemCount') }})
    table_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableArn') }})
    table_size_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableSizeBytes') }})
    
