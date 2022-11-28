from dataclasses import dataclass, field
from typing import Optional


@dataclass
class S3Storage:
    r"""S3Storage
    Describes the storage parameters for Amazon S3 and Amazon S3 buckets for an instance store-backed AMI.
    """
    
    aws_access_key_id: Optional[str] = field(default=None)
    bucket: Optional[str] = field(default=None)
    prefix: Optional[str] = field(default=None)
    upload_policy: Optional[str] = field(default=None)
    upload_policy_signature: Optional[str] = field(default=None)
    
