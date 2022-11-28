from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeServicesRequest:
    services: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    include: Optional[List[ServiceFieldEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('include') }})
    
