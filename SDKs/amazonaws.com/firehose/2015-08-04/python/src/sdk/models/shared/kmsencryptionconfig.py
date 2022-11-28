from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class KmsEncryptionConfig:
    r"""KmsEncryptionConfig
    Describes an encryption key for a destination in Amazon S3.
    """
    
    awskms_key_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AWSKMSKeyARN') }})
    
