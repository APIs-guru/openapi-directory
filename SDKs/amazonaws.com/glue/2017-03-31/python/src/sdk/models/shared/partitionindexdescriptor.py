from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PartitionIndexDescriptor:
    r"""PartitionIndexDescriptor
    A descriptor for a partition index in a table.
    """
    
    index_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexName') }})
    index_status: PartitionIndexStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexStatus') }})
    keys: List[KeySchemaElement] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Keys') }})
    backfill_errors: Optional[List[BackfillError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackfillErrors') }})
    
