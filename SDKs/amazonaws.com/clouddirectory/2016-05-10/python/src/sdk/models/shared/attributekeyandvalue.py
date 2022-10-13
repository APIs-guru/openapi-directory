from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import attributekey
from . import typedattributevalue


@dataclass_json
@dataclass
class AttributeKeyAndValue:
    key: attributekey.AttributeKey = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    value: typedattributevalue.TypedAttributeValue = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
