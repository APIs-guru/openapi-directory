from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutBlockPublicAccessConfigurationInput:
    block_public_access_configuration: BlockPublicAccessConfiguration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BlockPublicAccessConfiguration') }})
    
