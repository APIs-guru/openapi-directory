from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeClustersRequest:
    clusters: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusters') }})
    include: Optional[List[ClusterFieldEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('include') }})
    
