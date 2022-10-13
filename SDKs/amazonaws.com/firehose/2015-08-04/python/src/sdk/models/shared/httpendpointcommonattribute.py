from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class HTTPEndpointCommonAttribute:
    attribute_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeName' }})
    attribute_value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeValue' }})
    
