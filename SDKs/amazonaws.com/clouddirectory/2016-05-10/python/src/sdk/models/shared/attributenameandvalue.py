from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import typedattributevalue


@dataclass_json
@dataclass
class AttributeNameAndValue:
    attribute_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeName' }})
    value: typedattributevalue.TypedAttributeValue = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
