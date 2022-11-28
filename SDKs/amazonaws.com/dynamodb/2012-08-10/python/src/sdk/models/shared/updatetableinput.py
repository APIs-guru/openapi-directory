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
class UpdateTableInput:
    r"""UpdateTableInput
    Represents the input of an <code>UpdateTable</code> operation.
    """
    
    table_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    attribute_definitions: Optional[List[AttributeDefinition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeDefinitions') }})
    billing_mode: Optional[BillingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BillingMode') }})
    global_secondary_index_updates: Optional[List[GlobalSecondaryIndexUpdate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlobalSecondaryIndexUpdates') }})
    provisioned_throughput: Optional[ProvisionedThroughput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedThroughput') }})
    replica_updates: Optional[List[ReplicationGroupUpdate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicaUpdates') }})
    sse_specification: Optional[SseSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SSESpecification') }})
    stream_specification: Optional[StreamSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamSpecification') }})
    
