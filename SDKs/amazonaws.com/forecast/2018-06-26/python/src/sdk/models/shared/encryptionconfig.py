from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EncryptionConfig:
    r"""EncryptionConfig
    An AWS Key Management Service (KMS) key and an AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key. You can specify this optional object in the <a>CreateDataset</a> and <a>CreatePredictor</a> requests.
    """
    
    kms_key_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KMSKeyArn') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    
