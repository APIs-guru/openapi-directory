from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser


@dataclass
class MfaDevice:
    r"""MfaDevice
    <p>Contains information about an MFA device.</p> <p>This data type is used as a response element in the <a>ListMFADevices</a> operation.</p>
    """
    
    enable_date: datetime = field()
    serial_number: str = field()
    user_name: str = field()
    
