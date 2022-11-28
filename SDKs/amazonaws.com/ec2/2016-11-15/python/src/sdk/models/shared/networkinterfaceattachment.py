from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *


@dataclass
class NetworkInterfaceAttachment:
    r"""NetworkInterfaceAttachment
    Describes a network interface attachment.
    """
    
    attach_time: Optional[datetime] = field(default=None)
    attachment_id: Optional[str] = field(default=None)
    delete_on_termination: Optional[bool] = field(default=None)
    device_index: Optional[int] = field(default=None)
    instance_id: Optional[str] = field(default=None)
    instance_owner_id: Optional[str] = field(default=None)
    network_card_index: Optional[int] = field(default=None)
    status: Optional[AttachmentStatusEnum] = field(default=None)
    
