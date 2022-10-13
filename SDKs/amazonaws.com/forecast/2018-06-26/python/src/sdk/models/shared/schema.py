from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import schemaattribute


@dataclass_json
@dataclass
class Schema:
    attributes: Optional[List[schemaattribute.SchemaAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attributes' }})
    
