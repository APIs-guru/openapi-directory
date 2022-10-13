from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import addoninfo


@dataclass_json
@dataclass
class DescribeAddonVersionsResponse:
    addons: Optional[List[addoninfo.AddonInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addons' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
