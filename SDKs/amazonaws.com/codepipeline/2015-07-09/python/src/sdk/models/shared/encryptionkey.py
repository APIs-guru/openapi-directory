from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EncryptionKey:
    r"""EncryptionKey
    Represents information about the key used to encrypt data in the artifact store, such as an AWS Key Management Service (AWS KMS) key.
    """
    
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: EncryptionKeyTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
