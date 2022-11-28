from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteDirectoryRequest:
    r"""DeleteDirectoryRequest
    Contains the inputs for the <a>DeleteDirectory</a> operation.
    """
    
    directory_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    
