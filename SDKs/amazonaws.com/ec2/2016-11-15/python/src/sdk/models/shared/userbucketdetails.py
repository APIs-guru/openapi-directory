from dataclasses import dataclass, field
from typing import Optional


@dataclass
class UserBucketDetails:
    r"""UserBucketDetails
    Describes the Amazon S3 bucket for the disk image.
    """
    
    s3_bucket: Optional[str] = field(default=None)
    s3_key: Optional[str] = field(default=None)
    
