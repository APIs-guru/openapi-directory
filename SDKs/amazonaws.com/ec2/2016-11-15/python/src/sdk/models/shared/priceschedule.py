from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class PriceSchedule:
    r"""PriceSchedule
    Describes the price for a Reserved Instance.
    """
    
    active: Optional[bool] = field(default=None)
    currency_code: Optional[CurrencyCodeValuesEnum] = field(default=None)
    price: Optional[float] = field(default=None)
    term: Optional[int] = field(default=None)
    
