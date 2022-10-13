from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import scalabledimension_enum
from . import servicenamespace_enum
from . import suspendedstate


@dataclass_json
@dataclass
class RegisterScalableTargetRequest:
    max_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxCapacity' }})
    min_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinCapacity' }})
    resource_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceId' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleARN' }})
    scalable_dimension: scalabledimension_enum.ScalableDimensionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScalableDimension' }})
    service_namespace: servicenamespace_enum.ServiceNamespaceEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceNamespace' }})
    suspended_state: Optional[suspendedstate.SuspendedState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SuspendedState' }})
    
