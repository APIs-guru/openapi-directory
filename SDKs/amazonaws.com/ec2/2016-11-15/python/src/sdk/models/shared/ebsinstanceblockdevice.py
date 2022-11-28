from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *


@dataclass
class EbsInstanceBlockDevice:
    r"""EbsInstanceBlockDevice
    Describes a parameter used to set up an EBS volume in a block device mapping.
    """
    
    attach_time: Optional[datetime] = field(default=None)
    delete_on_termination: Optional[bool] = field(default=None)
    status: Optional[AttachmentStatusEnum] = field(default=None)
    volume_id: Optional[str] = field(default=None)
    
