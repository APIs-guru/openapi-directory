from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import memberdetail
from . import unprocessedaccount


@dataclass_json
@dataclass
class GetMembersResponse:
    member_details: Optional[List[memberdetail.MemberDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MemberDetails' }})
    unprocessed_accounts: Optional[List[unprocessedaccount.UnprocessedAccount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnprocessedAccounts' }})
    
