from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListFleetsInput:
    build_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BuildId' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    script_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScriptId' }})
    
