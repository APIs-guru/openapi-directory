from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetAppsListRequest:
    default_list: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultList' }})
    list_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ListId' }})
    
