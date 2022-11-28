from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeContainerInstancesResponse:
    container_instances: Optional[List[ContainerInstance]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerInstances') }})
    failures: Optional[List[Failure]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failures') }})
    
