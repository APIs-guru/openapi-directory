from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import keysandattributes


@dataclass_json
@dataclass
class BatchGetItemInput:
    request_items: dict[str, keysandattributes.KeysAndAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestItems' }})
    
