from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Permission:
    access: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Access' }})
    grantee: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Grantee' }})
    grantee_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GranteeType' }})
    
