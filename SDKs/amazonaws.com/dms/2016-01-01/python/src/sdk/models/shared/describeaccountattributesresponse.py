from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accountquota


@dataclass_json
@dataclass
class DescribeAccountAttributesResponse:
    account_quotas: Optional[List[accountquota.AccountQuota]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountQuotas' }})
    unique_account_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UniqueAccountIdentifier' }})
    
