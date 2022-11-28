from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class GetHostReservationPurchasePreviewResult:
    currency_code: Optional[CurrencyCodeValuesEnum] = field(default=None)
    purchase: Optional[List[Purchase]] = field(default=None)
    total_hourly_price: Optional[str] = field(default=None)
    total_upfront_price: Optional[str] = field(default=None)
    
