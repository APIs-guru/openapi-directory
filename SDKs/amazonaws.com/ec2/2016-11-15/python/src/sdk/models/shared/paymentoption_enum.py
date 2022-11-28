from dataclasses import dataclass, field
from enum import Enum

class PaymentOptionEnum(str, Enum):
    ALL_UPFRONT = "AllUpfront"
    PARTIAL_UPFRONT = "PartialUpfront"
    NO_UPFRONT = "NoUpfront"

