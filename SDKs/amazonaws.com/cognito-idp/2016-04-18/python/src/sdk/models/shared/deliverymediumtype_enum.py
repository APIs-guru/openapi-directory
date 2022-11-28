from dataclasses import dataclass, field
from enum import Enum

class DeliveryMediumTypeEnum(str, Enum):
    SMS = "SMS"
    EMAIL = "EMAIL"

