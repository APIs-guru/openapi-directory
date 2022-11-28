from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MitigationAction:
    r"""MitigationAction
    Describes which changes should be applied as part of a mitigation action.
    """
    
    action_params: Optional[MitigationActionParams] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionParams') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    
