from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import indexstatus_enum
from . import keyschemaelement
from . import projection
from . import provisionedthroughputdescription


@dataclass_json
@dataclass
class GlobalSecondaryIndexDescription:
    backfilling: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Backfilling' }})
    index_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndexArn' }})
    index_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndexName' }})
    index_size_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndexSizeBytes' }})
    index_status: Optional[indexstatus_enum.IndexStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndexStatus' }})
    item_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ItemCount' }})
    key_schema: Optional[List[keyschemaelement.KeySchemaElement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeySchema' }})
    projection: Optional[projection.Projection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Projection' }})
    provisioned_throughput: Optional[provisionedthroughputdescription.ProvisionedThroughputDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedThroughput' }})
    
