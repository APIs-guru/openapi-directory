from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import unprocessedaccount


@dataclass_json
@dataclass
class DeleteMembersResponse:
    account_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountIds' }})
    unprocessed_accounts: Optional[List[unprocessedaccount.UnprocessedAccount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnprocessedAccounts' }})
    
