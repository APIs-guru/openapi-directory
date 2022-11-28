from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProvisionByoipCidrRequest:
    cidr: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Cidr') }})
    cidr_authorization_context: CidrAuthorizationContext = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CidrAuthorizationContext') }})
    
