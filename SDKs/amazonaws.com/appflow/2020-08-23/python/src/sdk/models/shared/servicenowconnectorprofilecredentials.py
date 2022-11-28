from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ServiceNowConnectorProfileCredentials:
    r"""ServiceNowConnectorProfileCredentials
     The connector-specific profile credentials required when using ServiceNow. 
    """
    
    password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    username: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
