from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from . import *


@dataclass
class AddressAttribute:
    r"""AddressAttribute
    The attributes associated with an Elastic IP address.
    """
    
    allocation_id: Optional[str] = field(default=None)
    ptr_record: Optional[str] = field(default=None)
    ptr_record_update: Optional[PtrUpdateStatus] = field(default=None)
    public_ip: Optional[str] = field(default=None)
    
