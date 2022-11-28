from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AccountQuota:
    r"""AccountQuota
    Describes a quota for an Amazon Web Services account, for example the number of replication instances allowed.
    """
    
    account_quota_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountQuotaName') }})
    max: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Max') }})
    used: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Used') }})
    
