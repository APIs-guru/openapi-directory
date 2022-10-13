from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import errordetail


@dataclass_json
@dataclass
class BatchDeleteConnectionResponse:
    errors: Optional[dict[str, errordetail.ErrorDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Errors' }})
    succeeded: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Succeeded' }})
    
