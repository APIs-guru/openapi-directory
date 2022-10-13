from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import identitypoolusage


@dataclass_json
@dataclass
class DescribeIdentityPoolUsageResponse:
    identity_pool_usage: Optional[identitypoolusage.IdentityPoolUsage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityPoolUsage' }})
    
