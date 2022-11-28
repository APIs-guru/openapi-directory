from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateGlobalSecondaryIndexAction:
    r"""CreateGlobalSecondaryIndexAction
    Represents a new global secondary index to be added to an existing table.
    """
    
    index_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexName') }})
    key_schema: List[KeySchemaElement] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeySchema') }})
    projection: Projection = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Projection') }})
    provisioned_throughput: Optional[ProvisionedThroughput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedThroughput') }})
    
