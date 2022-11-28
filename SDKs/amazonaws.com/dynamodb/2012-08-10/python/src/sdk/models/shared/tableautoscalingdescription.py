from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TableAutoScalingDescription:
    r"""TableAutoScalingDescription
    Represents the auto scaling configuration for a global table.
    """
    
    replicas: Optional[List[ReplicaAutoScalingDescription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Replicas') }})
    table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    table_status: Optional[TableStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableStatus') }})
    
