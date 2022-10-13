from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import grpcroutemetadata


@dataclass_json
@dataclass
class GrpcRouteMatch:
    metadata: Optional[List[grpcroutemetadata.GrpcRouteMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    method_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'methodName' }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceName' }})
    
