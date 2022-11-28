from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class HostOffering:
    r"""HostOffering
    Details about the Dedicated Host Reservation offering.
    """
    
    currency_code: Optional[CurrencyCodeValuesEnum] = field(default=None)
    duration: Optional[int] = field(default=None)
    hourly_price: Optional[str] = field(default=None)
    instance_family: Optional[str] = field(default=None)
    offering_id: Optional[str] = field(default=None)
    payment_option: Optional[PaymentOptionEnum] = field(default=None)
    upfront_price: Optional[str] = field(default=None)
    
