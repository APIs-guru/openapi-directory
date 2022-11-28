from dataclasses import dataclass, field
from enum import Enum

class DeliveryMethodEnum(str, Enum):
    EMAIL = "EMAIL"
    SMS = "SMS"

