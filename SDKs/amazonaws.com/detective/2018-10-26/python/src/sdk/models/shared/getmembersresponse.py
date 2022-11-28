from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetMembersResponse:
    member_details: Optional[List[MemberDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MemberDetails') }})
    unprocessed_accounts: Optional[List[UnprocessedAccount]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnprocessedAccounts') }})
    
