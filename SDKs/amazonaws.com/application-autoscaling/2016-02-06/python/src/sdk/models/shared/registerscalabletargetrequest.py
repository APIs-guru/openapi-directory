from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RegisterScalableTargetRequest:
    resource_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    scalable_dimension: ScalableDimensionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalableDimension') }})
    service_namespace: ServiceNamespaceEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceNamespace') }})
    max_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxCapacity') }})
    min_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinCapacity') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    suspended_state: Optional[SuspendedState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuspendedState') }})
    
