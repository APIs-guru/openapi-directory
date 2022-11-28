from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class Purchase:
    r"""Purchase
    Describes the result of the purchase.
    """
    
    currency_code: Optional[CurrencyCodeValuesEnum] = field(default=None)
    duration: Optional[int] = field(default=None)
    host_id_set: Optional[List[str]] = field(default=None)
    host_reservation_id: Optional[str] = field(default=None)
    hourly_price: Optional[str] = field(default=None)
    instance_family: Optional[str] = field(default=None)
    payment_option: Optional[PaymentOptionEnum] = field(default=None)
    upfront_price: Optional[str] = field(default=None)
    
