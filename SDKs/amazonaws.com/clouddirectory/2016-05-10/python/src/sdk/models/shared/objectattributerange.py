from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import attributekey
from . import typedattributevaluerange


@dataclass_json
@dataclass
class ObjectAttributeRange:
    attribute_key: Optional[attributekey.AttributeKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeKey' }})
    range: Optional[typedattributevaluerange.TypedAttributeValueRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Range' }})
    
