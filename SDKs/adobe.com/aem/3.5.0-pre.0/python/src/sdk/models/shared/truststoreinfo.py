from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import truststoreitems


@dataclass_json
@dataclass
class TruststoreInfo:
    aliases: Optional[List[truststoreitems.TruststoreItems]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aliases' }})
    exists: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exists' }})
    
