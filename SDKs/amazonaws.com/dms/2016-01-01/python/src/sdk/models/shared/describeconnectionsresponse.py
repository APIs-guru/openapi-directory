from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeConnectionsResponse:
    r"""DescribeConnectionsResponse
    <p/>
    """
    
    connections: Optional[List[Connection]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Connections') }})
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marker') }})
    
