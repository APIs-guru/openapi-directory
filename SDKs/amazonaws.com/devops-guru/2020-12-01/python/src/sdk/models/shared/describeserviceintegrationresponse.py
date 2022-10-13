from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import serviceintegrationconfig


@dataclass_json
@dataclass
class DescribeServiceIntegrationResponse:
    service_integration: Optional[serviceintegrationconfig.ServiceIntegrationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceIntegration' }})
    
