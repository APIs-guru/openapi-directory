from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import scalabledimension_enum
from . import servicenamespace_enum
from . import suspendedstate


@dataclass_json
@dataclass
class ScalableTarget:
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    max_capacity: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxCapacity' }})
    min_capacity: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinCapacity' }})
    resource_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceId' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleARN' }})
    scalable_dimension: scalabledimension_enum.ScalableDimensionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScalableDimension' }})
    service_namespace: servicenamespace_enum.ServiceNamespaceEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceNamespace' }})
    suspended_state: Optional[suspendedstate.SuspendedState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SuspendedState' }})
    
