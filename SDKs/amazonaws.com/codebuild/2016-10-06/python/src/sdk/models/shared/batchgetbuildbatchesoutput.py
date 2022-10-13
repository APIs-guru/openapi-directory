from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import buildbatch


@dataclass_json
@dataclass
class BatchGetBuildBatchesOutput:
    build_batches: Optional[List[buildbatch.BuildBatch]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildBatches' }})
    build_batches_not_found: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildBatchesNotFound' }})
    
