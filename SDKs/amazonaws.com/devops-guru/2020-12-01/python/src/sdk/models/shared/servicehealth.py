from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import serviceinsighthealth
from . import servicename_enum


@dataclass_json
@dataclass
class ServiceHealth:
    insight: Optional[serviceinsighthealth.ServiceInsightHealth] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Insight' }})
    service_name: Optional[servicename_enum.ServiceNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceName' }})
    
