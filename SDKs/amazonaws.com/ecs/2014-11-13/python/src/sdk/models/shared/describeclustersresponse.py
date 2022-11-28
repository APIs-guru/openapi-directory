from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeClustersResponse:
    clusters: Optional[List[Cluster]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusters') }})
    failures: Optional[List[Failure]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failures') }})
    
