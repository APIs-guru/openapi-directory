from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import typedattributevaluerange


@dataclass_json
@dataclass
class TypedLinkAttributeRange:
    attribute_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeName' }})
    range: typedattributevaluerange.TypedAttributeValueRange = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Range' }})
    
