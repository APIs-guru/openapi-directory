from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import errordetail


@dataclass_json
@dataclass
class BatchUpdatePartitionFailureEntry:
    error_detail: Optional[errordetail.ErrorDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorDetail' }})
    partition_value_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PartitionValueList' }})
    
