from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import connectioninput


@dataclass_json
@dataclass
class UpdateConnectionRequest:
    catalog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CatalogId' }})
    connection_input: connectioninput.ConnectionInput = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectionInput' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
