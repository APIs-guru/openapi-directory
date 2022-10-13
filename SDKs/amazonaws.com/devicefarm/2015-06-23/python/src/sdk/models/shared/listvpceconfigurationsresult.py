from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import vpceconfiguration


@dataclass_json
@dataclass
class ListVpceConfigurationsResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    vpce_configurations: Optional[List[vpceconfiguration.VpceConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpceConfigurations' }})
    
