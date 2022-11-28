from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeFileSystemsResponse:
    r"""DescribeFileSystemsResponse
    The response object for <code>DescribeFileSystems</code> operation.
    """
    
    file_systems: Optional[List[FileSystem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileSystems') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
