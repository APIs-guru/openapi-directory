from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import batchupdatepartitionfailureentry


@dataclass_json
@dataclass
class BatchUpdatePartitionResponse:
    errors: Optional[List[batchupdatepartitionfailureentry.BatchUpdatePartitionFailureEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Errors' }})
    
