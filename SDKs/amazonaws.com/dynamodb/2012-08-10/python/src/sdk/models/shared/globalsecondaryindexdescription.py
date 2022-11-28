from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GlobalSecondaryIndexDescription:
    r"""GlobalSecondaryIndexDescription
    Represents the properties of a global secondary index.
    """
    
    backfilling: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Backfilling') }})
    index_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexArn') }})
    index_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexName') }})
    index_size_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexSizeBytes') }})
    index_status: Optional[IndexStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexStatus') }})
    item_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ItemCount') }})
    key_schema: Optional[List[KeySchemaElement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeySchema') }})
    projection: Optional[Projection] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Projection') }})
    provisioned_throughput: Optional[ProvisionedThroughputDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedThroughput') }})
    
