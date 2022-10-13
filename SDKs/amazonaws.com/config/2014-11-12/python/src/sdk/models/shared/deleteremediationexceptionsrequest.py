from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import remediationexceptionresourcekey


@dataclass_json
@dataclass
class DeleteRemediationExceptionsRequest:
    config_rule_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigRuleName' }})
    resource_keys: List[remediationexceptionresourcekey.RemediationExceptionResourceKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceKeys' }})
    
