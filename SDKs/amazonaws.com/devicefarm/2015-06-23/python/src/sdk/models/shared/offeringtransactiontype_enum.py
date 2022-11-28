from dataclasses import dataclass, field
from enum import Enum

class OfferingTransactionTypeEnum(str, Enum):
    PURCHASE = "PURCHASE"
    RENEW = "RENEW"
    SYSTEM = "SYSTEM"

