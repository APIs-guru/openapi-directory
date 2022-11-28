from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SseConfiguration:
    r"""SseConfiguration
     The server-side encryption key configuration for a customer provided encryption key. 
    """
    
    kms_encryption_config: KmsEncryptionConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsEncryptionConfig') }})
    
