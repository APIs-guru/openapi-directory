from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import configlistitem


@dataclass_json
@dataclass
class ListConfigsResponse:
    config_list: Optional[List[configlistitem.ConfigListItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
