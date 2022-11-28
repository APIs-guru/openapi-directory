from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListServerNeighborsResponse:
    neighbors: List[NeighborConnectionDetail] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('neighbors') }})
    known_dependency_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('knownDependencyCount') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
