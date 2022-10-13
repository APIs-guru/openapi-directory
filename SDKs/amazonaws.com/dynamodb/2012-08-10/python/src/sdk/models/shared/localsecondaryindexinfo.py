from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import keyschemaelement
from . import projection


@dataclass_json
@dataclass
class LocalSecondaryIndexInfo:
    index_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndexName' }})
    key_schema: Optional[List[keyschemaelement.KeySchemaElement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeySchema' }})
    projection: Optional[projection.Projection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Projection' }})
    
