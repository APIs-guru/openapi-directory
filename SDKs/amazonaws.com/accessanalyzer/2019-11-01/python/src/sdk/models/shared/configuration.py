from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Configuration:
    r"""Configuration
    Access control configuration structures for your resource. You specify the configuration as a type-value pair. You can specify only one type of access control configuration.
    """
    
    iam_role: Optional[IamRoleConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamRole') }})
    kms_key: Optional[KmsKeyConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKey') }})
    s3_bucket: Optional[S3BucketConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Bucket') }})
    secrets_manager_secret: Optional[SecretsManagerSecretConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretsManagerSecret') }})
    sqs_queue: Optional[SqsQueueConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sqsQueue') }})
    
