from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchGetPartitionResponse:
    partitions: Optional[List[Partition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Partitions') }})
    unprocessed_keys: Optional[List[PartitionValueList]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnprocessedKeys') }})
    
