from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class KmsKeyConfiguration:
    r"""KmsKeyConfiguration
    <p>Proposed access control configuration for a KMS key. You can propose a configuration for a new KMS key or an existing KMS key that you own by specifying the key policy and KMS grant configuration. If the configuration is for an existing key and you do not specify the key policy, the access preview uses the existing policy for the key. If the access preview is for a new resource and you do not specify the key policy, then the access preview uses the default key policy. The proposed key policy cannot be an empty string. For more information, see <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default\">Default key policy</a>. For more information about key policy limits, see <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/resource-limits.html\">Resource quotas</a>.</p> <p/>
    """
    
    grants: Optional[List[KmsGrantConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grants') }})
    key_policies: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyPolicies') }})
    
