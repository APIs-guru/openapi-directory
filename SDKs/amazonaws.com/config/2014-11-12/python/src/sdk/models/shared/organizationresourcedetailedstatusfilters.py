from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OrganizationResourceDetailedStatusFilters:
    r"""OrganizationResourceDetailedStatusFilters
    Status filter object to filter results based on specific member account ID or status type for an organization conformance pack.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    status: Optional[OrganizationResourceDetailedStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
