from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InforNexusConnectorProfileCredentials:
    r"""InforNexusConnectorProfileCredentials
     The connector-specific profile credentials required by Infor Nexus. 
    """
    
    access_key_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessKeyId') }})
    datakey: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datakey') }})
    secret_access_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretAccessKey') }})
    user_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    
