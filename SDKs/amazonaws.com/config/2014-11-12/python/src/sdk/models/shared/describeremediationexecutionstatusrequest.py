from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resourcekey


@dataclass_json
@dataclass
class DescribeRemediationExecutionStatusRequest:
    config_rule_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigRuleName' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    resource_keys: Optional[List[resourcekey.ResourceKey]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceKeys' }})
    
