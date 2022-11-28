from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateConnectionAPIKeyAuthRequestParameters:
    r"""CreateConnectionAPIKeyAuthRequestParameters
    Contains the API key authorization parameters for the connection.
    """
    
    api_key_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApiKeyName') }})
    api_key_value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApiKeyValue') }})
    
