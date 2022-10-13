from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import memberdetail


@dataclass_json
@dataclass
class ListMembersResponse:
    member_details: Optional[List[memberdetail.MemberDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MemberDetails' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
