from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EncryptionConfiguration:
    r"""EncryptionConfiguration
    Describes a custom encryption key that AWS App Runner uses to encrypt copies of the source repository and service logs.
    """
    
    kms_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKey') }})
    
