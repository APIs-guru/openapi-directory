from dataclasses import dataclass, field
from typing import Enum

class DeliveryMediumTypeEnum(str, Enum):
    SMS = "SMS"
    EMAIL = "EMAIL"

