from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateConnectionBasicAuthRequestParameters:
    r"""CreateConnectionBasicAuthRequestParameters
    Contains the Basic authorization parameters to use for the connection.
    """
    
    password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Password') }})
    username: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Username') }})
    
