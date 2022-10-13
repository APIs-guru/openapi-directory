from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import vpceconfiguration


@dataclass_json
@dataclass
class UpdateVpceConfigurationResult:
    vpce_configuration: Optional[vpceconfiguration.VpceConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpceConfiguration' }})
    
