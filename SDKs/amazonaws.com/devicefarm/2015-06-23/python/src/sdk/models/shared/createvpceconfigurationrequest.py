from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateVpceConfigurationRequest:
    service_dns_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceDnsName' }})
    vpce_configuration_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpceConfigurationDescription' }})
    vpce_configuration_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpceConfigurationName' }})
    vpce_service_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpceServiceName' }})
    
