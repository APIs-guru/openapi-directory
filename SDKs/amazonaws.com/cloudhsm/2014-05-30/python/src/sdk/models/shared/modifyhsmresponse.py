from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ModifyHsmResponse:
    r"""ModifyHsmResponse
    Contains the output of the <a>ModifyHsm</a> operation.
    """
    
    hsm_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HsmArn') }})
    
