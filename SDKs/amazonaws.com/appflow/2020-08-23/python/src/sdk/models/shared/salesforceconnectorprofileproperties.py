from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SalesforceConnectorProfileProperties:
    instance_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceUrl' }})
    is_sandbox_environment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isSandboxEnvironment' }})
    
