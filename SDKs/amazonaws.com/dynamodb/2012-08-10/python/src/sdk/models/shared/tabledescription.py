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
class TableDescription:
    r"""TableDescription
    Represents the properties of a table.
    """
    
    archival_summary: Optional[ArchivalSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ArchivalSummary') }})
    attribute_definitions: Optional[List[AttributeDefinition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeDefinitions') }})
    billing_mode_summary: Optional[BillingModeSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BillingModeSummary') }})
    creation_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    global_secondary_indexes: Optional[List[GlobalSecondaryIndexDescription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlobalSecondaryIndexes') }})
    global_table_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlobalTableVersion') }})
    item_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ItemCount') }})
    key_schema: Optional[List[KeySchemaElement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeySchema') }})
    latest_stream_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LatestStreamArn') }})
    latest_stream_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LatestStreamLabel') }})
    local_secondary_indexes: Optional[List[LocalSecondaryIndexDescription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocalSecondaryIndexes') }})
    provisioned_throughput: Optional[ProvisionedThroughputDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedThroughput') }})
    replicas: Optional[List[ReplicaDescription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Replicas') }})
    restore_summary: Optional[RestoreSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RestoreSummary') }})
    sse_description: Optional[SseDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SSEDescription') }})
    stream_specification: Optional[StreamSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamSpecification') }})
    table_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableArn') }})
    table_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableId') }})
    table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    table_size_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableSizeBytes') }})
    table_status: Optional[TableStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableStatus') }})
    
