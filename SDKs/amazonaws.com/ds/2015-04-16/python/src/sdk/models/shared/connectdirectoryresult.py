from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ConnectDirectoryResult:
    r"""ConnectDirectoryResult
    Contains the results of the <a>ConnectDirectory</a> operation.
    """
    
    directory_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    
