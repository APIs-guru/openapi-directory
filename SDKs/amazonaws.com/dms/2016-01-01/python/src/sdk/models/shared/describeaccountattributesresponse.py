from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeAccountAttributesResponse:
    r"""DescribeAccountAttributesResponse
    <p/>
    """
    
    account_quotas: Optional[List[AccountQuota]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountQuotas') }})
    unique_account_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UniqueAccountIdentifier') }})
    
