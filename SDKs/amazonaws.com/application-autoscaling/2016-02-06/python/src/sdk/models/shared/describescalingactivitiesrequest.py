from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import scalabledimension_enum
from . import servicenamespace_enum


@dataclass_json
@dataclass
class DescribeScalingActivitiesRequest:
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceId' }})
    scalable_dimension: Optional[scalabledimension_enum.ScalableDimensionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScalableDimension' }})
    service_namespace: servicenamespace_enum.ServiceNamespaceEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceNamespace' }})
    
