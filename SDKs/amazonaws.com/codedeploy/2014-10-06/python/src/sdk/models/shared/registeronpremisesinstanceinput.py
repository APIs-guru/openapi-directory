from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RegisterOnPremisesInstanceInput:
    r"""RegisterOnPremisesInstanceInput
    Represents the input of the register on-premises instance operation.
    """
    
    instance_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceName') }})
    iam_session_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamSessionArn') }})
    iam_user_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamUserArn') }})
    
