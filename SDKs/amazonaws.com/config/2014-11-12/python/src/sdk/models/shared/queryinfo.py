from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import fieldinfo


@dataclass_json
@dataclass
class QueryInfo:
    select_fields: Optional[List[fieldinfo.FieldInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SelectFields' }})
    
