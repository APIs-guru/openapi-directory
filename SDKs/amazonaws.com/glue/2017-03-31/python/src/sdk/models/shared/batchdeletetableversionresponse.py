from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tableversionerror


@dataclass_json
@dataclass
class BatchDeleteTableVersionResponse:
    errors: Optional[List[tableversionerror.TableVersionError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Errors' }})
    
