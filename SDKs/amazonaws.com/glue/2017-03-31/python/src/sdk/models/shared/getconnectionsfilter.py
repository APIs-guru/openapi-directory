from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetConnectionsFilter:
    r"""GetConnectionsFilter
    Filters the connection definitions that are returned by the <code>GetConnections</code> API operation.
    """
    
    connection_type: Optional[ConnectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionType') }})
    match_criteria: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MatchCriteria') }})
    
