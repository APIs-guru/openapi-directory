from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import securityconfiguration


@dataclass_json
@dataclass
class GetSecurityConfigurationsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    security_configurations: Optional[List[securityconfiguration.SecurityConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityConfigurations' }})
    
