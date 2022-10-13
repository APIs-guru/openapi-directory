from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import securityconfigurationsummary


@dataclass_json
@dataclass
class ListSecurityConfigurationsOutput:
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marker' }})
    security_configurations: Optional[List[securityconfigurationsummary.SecurityConfigurationSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityConfigurations' }})
    
