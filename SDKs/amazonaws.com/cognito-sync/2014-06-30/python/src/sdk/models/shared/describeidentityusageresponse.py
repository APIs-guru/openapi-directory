from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import identityusage


@dataclass_json
@dataclass
class DescribeIdentityUsageResponse:
    identity_usage: Optional[identityusage.IdentityUsage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdentityUsage' }})
    
