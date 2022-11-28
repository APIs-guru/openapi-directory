from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SingularConnectorProfileCredentials:
    r"""SingularConnectorProfileCredentials
     The connector-specific profile credentials required when using Singular. 
    """
    
    api_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKey') }})
    
