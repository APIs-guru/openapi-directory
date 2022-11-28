from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class Volume:
    r"""Volume
    Describes a volume.
    """
    
    attachments: Optional[List[VolumeAttachment]] = field(default=None)
    availability_zone: Optional[str] = field(default=None)
    create_time: Optional[datetime] = field(default=None)
    encrypted: Optional[bool] = field(default=None)
    fast_restored: Optional[bool] = field(default=None)
    iops: Optional[int] = field(default=None)
    kms_key_id: Optional[str] = field(default=None)
    multi_attach_enabled: Optional[bool] = field(default=None)
    outpost_arn: Optional[str] = field(default=None)
    size: Optional[int] = field(default=None)
    snapshot_id: Optional[str] = field(default=None)
    state: Optional[VolumeStateEnum] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    throughput: Optional[int] = field(default=None)
    volume_id: Optional[str] = field(default=None)
    volume_type: Optional[VolumeTypeEnum] = field(default=None)
    
