from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import archivalsummary
from . import attributedefinition
from . import billingmodesummary
from . import globalsecondaryindexdescription
from . import keyschemaelement
from . import localsecondaryindexdescription
from . import provisionedthroughputdescription
from . import replicadescription
from . import restoresummary
from . import ssedescription
from . import streamspecification
from . import tablestatus_enum


@dataclass_json
@dataclass
class TableDescription:
    archival_summary: Optional[archivalsummary.ArchivalSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ArchivalSummary' }})
    attribute_definitions: Optional[List[attributedefinition.AttributeDefinition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeDefinitions' }})
    billing_mode_summary: Optional[billingmodesummary.BillingModeSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BillingModeSummary' }})
    creation_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    global_secondary_indexes: Optional[List[globalsecondaryindexdescription.GlobalSecondaryIndexDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlobalSecondaryIndexes' }})
    global_table_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlobalTableVersion' }})
    item_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ItemCount' }})
    key_schema: Optional[List[keyschemaelement.KeySchemaElement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeySchema' }})
    latest_stream_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LatestStreamArn' }})
    latest_stream_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LatestStreamLabel' }})
    local_secondary_indexes: Optional[List[localsecondaryindexdescription.LocalSecondaryIndexDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocalSecondaryIndexes' }})
    provisioned_throughput: Optional[provisionedthroughputdescription.ProvisionedThroughputDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedThroughput' }})
    replicas: Optional[List[replicadescription.ReplicaDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Replicas' }})
    restore_summary: Optional[restoresummary.RestoreSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RestoreSummary' }})
    sse_description: Optional[ssedescription.SseDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SSEDescription' }})
    stream_specification: Optional[streamspecification.StreamSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamSpecification' }})
    table_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableArn' }})
    table_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableId' }})
    table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    table_size_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableSizeBytes' }})
    table_status: Optional[tablestatus_enum.TableStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableStatus' }})
    
