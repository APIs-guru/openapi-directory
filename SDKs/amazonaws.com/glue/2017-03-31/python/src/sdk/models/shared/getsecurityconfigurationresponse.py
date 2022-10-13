from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import securityconfiguration


@dataclass_json
@dataclass
class GetSecurityConfigurationResponse:
    security_configuration: Optional[securityconfiguration.SecurityConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityConfiguration' }})
    
