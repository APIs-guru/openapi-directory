from dataclasses import dataclass, field
from typing import Enum

class AutoAcceptSharedAttachmentsValueEnum(str, Enum):
    ENABLE = "enable"
    DISABLE = "disable"

