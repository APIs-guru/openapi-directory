from dataclasses import dataclass, field
from enum import Enum

class ProductCodeValuesEnum(str, Enum):
    DEVPAY = "devpay"
    MARKETPLACE = "marketplace"

