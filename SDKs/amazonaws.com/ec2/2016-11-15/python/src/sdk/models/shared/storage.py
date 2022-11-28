from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class Storage:
    r"""Storage
    Describes the storage location for an instance store-backed AMI.
    """
    
    s3: Optional[S3Storage] = field(default=None)
    
