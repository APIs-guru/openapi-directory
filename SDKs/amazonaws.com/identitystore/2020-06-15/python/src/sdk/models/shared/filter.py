from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Filter:
    attribute_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributePath' }})
    attribute_value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeValue' }})
    
