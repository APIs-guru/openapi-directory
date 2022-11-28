from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IamRoleConfiguration:
    r"""IamRoleConfiguration
    The proposed access control configuration for an IAM role. You can propose a configuration for a new IAM role or an existing IAM role that you own by specifying the trust policy. If the configuration is for a new IAM role, you must specify the trust policy. If the configuration is for an existing IAM role that you own and you do not propose the trust policy, the access preview uses the existing trust policy for the role. The proposed trust policy cannot be an empty string. For more information about role trust policy limits, see <a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html\">IAM and STS quotas</a>.
    """
    
    trust_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trustPolicy') }})
    
