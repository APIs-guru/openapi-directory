from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeFileSystemAliasesResponse:
    r"""DescribeFileSystemAliasesResponse
    The response object for <code>DescribeFileSystemAliases</code> operation.
    """
    
    aliases: Optional[List[Alias]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Aliases') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
