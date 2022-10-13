from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import attributevalue


@dataclass_json
@dataclass
class ExpectedAttributeValue:
    exists: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Exists' }})
    value: Optional[attributevalue.AttributeValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
