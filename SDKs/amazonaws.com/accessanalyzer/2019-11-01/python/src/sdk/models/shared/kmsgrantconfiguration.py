from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class KmsGrantConfiguration:
    r"""KmsGrantConfiguration
    A proposed grant configuration for a KMS key. For more information, see <a href=\"https://docs.aws.amazon.com/kms/latest/APIReference/API_CreateGrant.html\">CreateGrant</a>.
    """
    
    grantee_principal: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('granteePrincipal') }})
    issuing_account: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuingAccount') }})
    operations: List[KmsGrantOperationEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operations') }})
    constraints: Optional[KmsGrantConstraints] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('constraints') }})
    retiring_principal: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retiringPrincipal') }})
    
