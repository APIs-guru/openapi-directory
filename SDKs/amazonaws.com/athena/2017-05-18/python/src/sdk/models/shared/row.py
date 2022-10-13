from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datum


@dataclass_json
@dataclass
class Row:
    data: Optional[List[datum.Datum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    
