from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeContainerInstancesRequest:
    container_instances: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerInstances') }})
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    include: Optional[List[ContainerInstanceFieldEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('include') }})
    
