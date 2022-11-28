from dataclasses import dataclass, field
from typing import Optional


@dataclass
class S3Location:
    r"""S3Location
    The bucket and key of an item stored in Amazon S3.
    """
    
    s3_bucket: Optional[str] = field(default=None)
    s3_key: Optional[str] = field(default=None)
    
