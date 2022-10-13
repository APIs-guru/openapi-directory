from dataclasses import dataclass, field
from typing import Enum

class DeliveryMethodEnum(str, Enum):
    EMAIL = "EMAIL"
    SMS = "SMS"

