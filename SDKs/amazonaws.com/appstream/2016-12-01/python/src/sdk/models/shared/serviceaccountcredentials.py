from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ServiceAccountCredentials:
    r"""ServiceAccountCredentials
    Describes the credentials for the service account used by the fleet or image builder to connect to the directory.
    """
    
    account_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountName') }})
    account_password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountPassword') }})
    
