from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class LaunchTemplateEbsBlockDevice:
    r"""LaunchTemplateEbsBlockDevice
    Describes a block device for an EBS volume.
    """
    
    delete_on_termination: Optional[bool] = field(default=None)
    encrypted: Optional[bool] = field(default=None)
    iops: Optional[int] = field(default=None)
    kms_key_id: Optional[str] = field(default=None)
    snapshot_id: Optional[str] = field(default=None)
    throughput: Optional[int] = field(default=None)
    volume_size: Optional[int] = field(default=None)
    volume_type: Optional[VolumeTypeEnum] = field(default=None)
    
