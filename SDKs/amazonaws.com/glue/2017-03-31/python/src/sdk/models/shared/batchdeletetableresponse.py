from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tableerror


@dataclass_json
@dataclass
class BatchDeleteTableResponse:
    errors: Optional[List[tableerror.TableError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Errors' }})
    
