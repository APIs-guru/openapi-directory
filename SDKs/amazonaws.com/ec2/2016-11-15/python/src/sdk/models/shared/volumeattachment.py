from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *


@dataclass
class VolumeAttachment:
    r"""VolumeAttachment
    Describes volume attachment details.
    """
    
    attach_time: Optional[datetime] = field(default=None)
    delete_on_termination: Optional[bool] = field(default=None)
    device: Optional[str] = field(default=None)
    instance_id: Optional[str] = field(default=None)
    state: Optional[VolumeAttachmentStateEnum] = field(default=None)
    volume_id: Optional[str] = field(default=None)
    
