from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateConnectionOAuthClientRequestParameters:
    r"""CreateConnectionOAuthClientRequestParameters
    Contains the Basic authorization parameters to use for the connection.
    """
    
    client_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientID') }})
    client_secret: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientSecret') }})
    
