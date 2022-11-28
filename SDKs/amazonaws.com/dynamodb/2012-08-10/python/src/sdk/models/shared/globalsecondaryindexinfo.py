from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GlobalSecondaryIndexInfo:
    r"""GlobalSecondaryIndexInfo
    Represents the properties of a global secondary index for the table when the backup was created.
    """
    
    index_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexName') }})
    key_schema: Optional[List[KeySchemaElement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeySchema') }})
    projection: Optional[Projection] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Projection') }})
    provisioned_throughput: Optional[ProvisionedThroughput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedThroughput') }})
    
