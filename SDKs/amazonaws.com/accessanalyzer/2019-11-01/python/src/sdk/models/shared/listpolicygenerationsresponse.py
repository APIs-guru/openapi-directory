from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import policygeneration


@dataclass_json
@dataclass
class ListPolicyGenerationsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    policy_generations: List[policygeneration.PolicyGeneration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyGenerations' }})
    
