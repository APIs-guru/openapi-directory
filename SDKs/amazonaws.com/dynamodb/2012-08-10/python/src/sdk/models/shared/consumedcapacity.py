from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConsumedCapacity:
    r"""ConsumedCapacity
    The capacity units consumed by an operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. <code>ConsumedCapacity</code> is only returned if the request asked for it. For more information, see <a href=\"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughputIntro.html\">Provisioned Throughput</a> in the <i>Amazon DynamoDB Developer Guide</i>.
    """
    
    capacity_units: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CapacityUnits') }})
    global_secondary_indexes: Optional[dict[str, Capacity]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlobalSecondaryIndexes') }})
    local_secondary_indexes: Optional[dict[str, Capacity]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocalSecondaryIndexes') }})
    read_capacity_units: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReadCapacityUnits') }})
    table: Optional[Capacity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Table') }})
    table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    write_capacity_units: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WriteCapacityUnits') }})
    
