from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import servicename_enum


@dataclass_json
@dataclass
class ServiceCollection:
    service_names: Optional[List[servicename_enum.ServiceNameEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceNames' }})
    
