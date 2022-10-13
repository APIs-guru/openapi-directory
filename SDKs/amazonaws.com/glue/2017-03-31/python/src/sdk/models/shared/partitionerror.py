from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import errordetail


@dataclass_json
@dataclass
class PartitionError:
    error_detail: Optional[errordetail.ErrorDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorDetail' }})
    partition_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PartitionValues' }})
    
