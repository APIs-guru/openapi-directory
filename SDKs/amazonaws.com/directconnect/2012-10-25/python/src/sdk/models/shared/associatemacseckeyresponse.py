from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import macseckey


@dataclass_json
@dataclass
class AssociateMacSecKeyResponse:
    connection_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionId' }})
    mac_sec_keys: Optional[List[macseckey.MacSecKey]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'macSecKeys' }})
    
