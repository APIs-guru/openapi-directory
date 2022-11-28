from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DatadogConnectorProfileCredentials:
    r"""DatadogConnectorProfileCredentials
     The connector-specific credentials required by Datadog. 
    """
    
    api_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKey') }})
    application_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationKey') }})
    
