from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ConnectorEntity:
    has_nested_entities: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasNestedEntities' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
