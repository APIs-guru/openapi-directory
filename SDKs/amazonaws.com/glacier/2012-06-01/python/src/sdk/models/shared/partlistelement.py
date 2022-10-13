from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PartListElement:
    range_in_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RangeInBytes' }})
    sha256_tree_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SHA256TreeHash' }})
    
