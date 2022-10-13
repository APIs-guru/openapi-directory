from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import attributevalue
from . import attributevalue


@dataclass_json
@dataclass
class Key:
    hash_key_element: attributevalue.AttributeValue = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HashKeyElement' }})
    range_key_element: Optional[attributevalue.AttributeValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RangeKeyElement' }})
    
