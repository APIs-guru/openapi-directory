from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import servicemetadata


@dataclass_json
@dataclass
class GetServicesInScopeResponse:
    service_metadata: Optional[List[servicemetadata.ServiceMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceMetadata' }})
    
