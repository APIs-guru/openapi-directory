from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import scalabledimension_enum
from . import servicenamespace_enum


@dataclass_json
@dataclass
class DeleteScheduledActionRequest:
    resource_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceId' }})
    scalable_dimension: scalabledimension_enum.ScalableDimensionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScalableDimension' }})
    scheduled_action_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScheduledActionName' }})
    service_namespace: servicenamespace_enum.ServiceNamespaceEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceNamespace' }})
    
