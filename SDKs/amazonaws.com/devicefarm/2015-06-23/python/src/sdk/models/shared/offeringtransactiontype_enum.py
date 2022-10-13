from dataclasses import dataclass, field
from typing import Enum

class OfferingTransactionTypeEnum(str, Enum):
    PURCHASE = "PURCHASE"
    RENEW = "RENEW"
    SYSTEM = "SYSTEM"

