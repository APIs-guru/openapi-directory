from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchGetBuildBatchesOutput:
    build_batches: Optional[List[BuildBatch]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildBatches') }})
    build_batches_not_found: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildBatchesNotFound') }})
    
