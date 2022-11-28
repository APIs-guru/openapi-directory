from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class ProvisionedBandwidth:
    r"""ProvisionedBandwidth
    Reserved. If you need to sustain traffic greater than the <a href=\"https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html\">documented limits</a>, contact us through the <a href=\"https://console.aws.amazon.com/support/home?\">Support Center</a>.
    """
    
    provision_time: Optional[datetime] = field(default=None)
    provisioned: Optional[str] = field(default=None)
    request_time: Optional[datetime] = field(default=None)
    requested: Optional[str] = field(default=None)
    status: Optional[str] = field(default=None)
    
