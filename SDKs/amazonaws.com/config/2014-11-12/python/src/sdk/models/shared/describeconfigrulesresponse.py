from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import configrule


@dataclass_json
@dataclass
class DescribeConfigRulesResponse:
    config_rules: Optional[List[configrule.ConfigRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigRules' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
