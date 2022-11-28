from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PutResourcePolicyInput:
    policy: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    resource_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceArn') }})
    
