from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteHsmRequest:
    r"""DeleteHsmRequest
    Contains the inputs for the <a>DeleteHsm</a> operation.
    """
    
    hsm_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HsmArn') }})
    
