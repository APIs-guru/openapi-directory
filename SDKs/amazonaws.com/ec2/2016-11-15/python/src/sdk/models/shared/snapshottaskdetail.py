from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class SnapshotTaskDetail:
    r"""SnapshotTaskDetail
    Details about the import snapshot task.
    """
    
    description: Optional[str] = field(default=None)
    disk_image_size: Optional[float] = field(default=None)
    encrypted: Optional[bool] = field(default=None)
    format: Optional[str] = field(default=None)
    kms_key_id: Optional[str] = field(default=None)
    progress: Optional[str] = field(default=None)
    snapshot_id: Optional[str] = field(default=None)
    status: Optional[str] = field(default=None)
    status_message: Optional[str] = field(default=None)
    url: Optional[str] = field(default=None)
    user_bucket: Optional[UserBucketDetails] = field(default=None)
    
