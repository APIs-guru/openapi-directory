from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import attributevalue


@dataclass_json
@dataclass
class PutRequest:
    item: dict[str, attributevalue.AttributeValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Item' }})
    
