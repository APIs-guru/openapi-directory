from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AmplitudeConnectorProfileCredentials:
    r"""AmplitudeConnectorProfileCredentials
     The connector-specific credentials required when using Amplitude. 
    """
    
    api_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKey') }})
    secret_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretKey') }})
    
