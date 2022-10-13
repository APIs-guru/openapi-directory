from dataclasses import dataclass, field
from typing import Enum

class DeliveryStreamEncryptionStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    ENABLING = "ENABLING"
    ENABLING_FAILED = "ENABLING_FAILED"
    DISABLED = "DISABLED"
    DISABLING = "DISABLING"
    DISABLING_FAILED = "DISABLING_FAILED"

