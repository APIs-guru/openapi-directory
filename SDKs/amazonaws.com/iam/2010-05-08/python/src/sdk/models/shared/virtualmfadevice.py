from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class VirtualMfaDevice:
    r"""VirtualMfaDevice
    Contains information about a virtual MFA device.
    """
    
    serial_number: str = field()
    base32_string_seed: Optional[str] = field(default=None)
    enable_date: Optional[datetime] = field(default=None)
    qr_code_png: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    user: Optional[User] = field(default=None)
    
