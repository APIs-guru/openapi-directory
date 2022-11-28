from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateSecurityConfigurationRequest:
    encryption_configuration: EncryptionConfiguration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionConfiguration') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
