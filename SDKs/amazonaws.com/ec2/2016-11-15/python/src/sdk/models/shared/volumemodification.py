from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *


@dataclass
class VolumeModification:
    r"""VolumeModification
    <p>Describes the modification status of an EBS volume.</p> <p>If the volume has never been modified, some element values will be null.</p>
    """
    
    end_time: Optional[datetime] = field(default=None)
    modification_state: Optional[VolumeModificationStateEnum] = field(default=None)
    original_iops: Optional[int] = field(default=None)
    original_multi_attach_enabled: Optional[bool] = field(default=None)
    original_size: Optional[int] = field(default=None)
    original_throughput: Optional[int] = field(default=None)
    original_volume_type: Optional[VolumeTypeEnum] = field(default=None)
    progress: Optional[int] = field(default=None)
    start_time: Optional[datetime] = field(default=None)
    status_message: Optional[str] = field(default=None)
    target_iops: Optional[int] = field(default=None)
    target_multi_attach_enabled: Optional[bool] = field(default=None)
    target_size: Optional[int] = field(default=None)
    target_throughput: Optional[int] = field(default=None)
    target_volume_type: Optional[VolumeTypeEnum] = field(default=None)
    volume_id: Optional[str] = field(default=None)
    
