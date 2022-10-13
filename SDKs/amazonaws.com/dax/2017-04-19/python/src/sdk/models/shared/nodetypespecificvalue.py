from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NodeTypeSpecificValue:
    node_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NodeType' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
