from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import networkprofiletype_enum


@dataclass_json
@dataclass
class ListNetworkProfilesRequest:
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    type: Optional[networkprofiletype_enum.NetworkProfileTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
