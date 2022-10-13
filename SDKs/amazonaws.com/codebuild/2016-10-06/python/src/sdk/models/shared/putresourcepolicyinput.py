from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PutResourcePolicyInput:
    policy: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policy' }})
    resource_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceArn' }})
    
