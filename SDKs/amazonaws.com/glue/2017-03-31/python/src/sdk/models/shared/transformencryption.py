from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TransformEncryption:
    r"""TransformEncryption
    <p>The encryption-at-rest settings of the transform that apply to accessing user data. Machine learning transforms can access user data encrypted in Amazon S3 using KMS.</p> <p>Additionally, imported labels and trained transforms can now be encrypted using a customer provided KMS key.</p>
    """
    
    ml_user_data_encryption: Optional[MlUserDataEncryption] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MlUserDataEncryption') }})
    task_run_security_configuration_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaskRunSecurityConfigurationName') }})
    
