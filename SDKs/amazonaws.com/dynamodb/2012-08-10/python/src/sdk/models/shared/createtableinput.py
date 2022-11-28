from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateTableInput:
    r"""CreateTableInput
    Represents the input of a <code>CreateTable</code> operation.
    """
    
    attribute_definitions: List[AttributeDefinition] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeDefinitions') }})
    key_schema: List[KeySchemaElement] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeySchema') }})
    table_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    billing_mode: Optional[BillingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BillingMode') }})
    global_secondary_indexes: Optional[List[GlobalSecondaryIndex]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlobalSecondaryIndexes') }})
    local_secondary_indexes: Optional[List[LocalSecondaryIndex]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocalSecondaryIndexes') }})
    provisioned_throughput: Optional[ProvisionedThroughput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedThroughput') }})
    sse_specification: Optional[SseSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SSESpecification') }})
    stream_specification: Optional[StreamSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamSpecification') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
