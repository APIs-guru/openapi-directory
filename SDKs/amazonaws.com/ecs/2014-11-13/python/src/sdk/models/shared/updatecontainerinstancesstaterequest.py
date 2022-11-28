from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateContainerInstancesStateRequest:
    container_instances: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerInstances') }})
    status: ContainerInstanceStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    
