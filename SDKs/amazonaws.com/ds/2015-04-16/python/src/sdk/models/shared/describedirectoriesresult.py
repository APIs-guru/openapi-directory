from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeDirectoriesResult:
    r"""DescribeDirectoriesResult
    Contains the results of the <a>DescribeDirectories</a> operation.
    """
    
    directory_descriptions: Optional[List[DirectoryDescription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryDescriptions') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
