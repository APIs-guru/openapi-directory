from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RepositoryCredentials:
    r"""RepositoryCredentials
    The repository credentials for private registry authentication.
    """
    
    credentials_parameter: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('credentialsParameter') }})
    
