from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import keyschemaelement
from . import keyschemaelement


@dataclass_json
@dataclass
class KeySchema:
    hash_key_element: keyschemaelement.KeySchemaElement = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HashKeyElement' }})
    range_key_element: Optional[keyschemaelement.KeySchemaElement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RangeKeyElement' }})
    
