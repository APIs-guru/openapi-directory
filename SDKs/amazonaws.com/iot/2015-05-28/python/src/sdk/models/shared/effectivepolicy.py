from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EffectivePolicy:
    r"""EffectivePolicy
    The policy that has the effect on the authorization results.
    """
    
    policy_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyArn') }})
    policy_document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyDocument') }})
    policy_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyName') }})
    
