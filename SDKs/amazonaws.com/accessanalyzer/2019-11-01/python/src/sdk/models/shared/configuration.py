from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import iamroleconfiguration
from . import kmskeyconfiguration
from . import s3bucketconfiguration
from . import secretsmanagersecretconfiguration
from . import sqsqueueconfiguration


@dataclass_json
@dataclass
class Configuration:
    iam_role: Optional[iamroleconfiguration.IamRoleConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iamRole' }})
    kms_key: Optional[kmskeyconfiguration.KmsKeyConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKey' }})
    s3_bucket: Optional[s3bucketconfiguration.S3BucketConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3Bucket' }})
    secrets_manager_secret: Optional[secretsmanagersecretconfiguration.SecretsManagerSecretConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secretsManagerSecret' }})
    sqs_queue: Optional[sqsqueueconfiguration.SqsQueueConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sqsQueue' }})
    
