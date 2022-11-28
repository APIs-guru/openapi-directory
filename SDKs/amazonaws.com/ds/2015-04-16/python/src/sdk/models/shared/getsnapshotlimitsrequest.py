from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetSnapshotLimitsRequest:
    r"""GetSnapshotLimitsRequest
    Contains the inputs for the <a>GetSnapshotLimits</a> operation.
    """
    
    directory_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    
