from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteDevicePoolRequest:
    r"""DeleteDevicePoolRequest
    Represents a request to the delete device pool operation.
    """
    
    arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    
