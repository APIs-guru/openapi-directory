from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import buildbatch


@dataclass_json
@dataclass
class StopBuildBatchOutput:
    build_batch: Optional[buildbatch.BuildBatch] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildBatch' }})
    
