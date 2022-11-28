from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SalesforceConnectorProfileProperties:
    r"""SalesforceConnectorProfileProperties
     The connector-specific profile properties required when using Salesforce. 
    """
    
    instance_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceUrl') }})
    is_sandbox_environment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSandboxEnvironment') }})
    
