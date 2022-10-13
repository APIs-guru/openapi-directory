from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import byoipcidr


@dataclass_json
@dataclass
class ListByoipCidrsResponse:
    byoip_cidrs: Optional[List[byoipcidr.ByoipCidr]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ByoipCidrs' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
