from dataclasses import dataclass, field
from typing import Enum

class MessageActionTypeEnum(str, Enum):
    RESEND = "RESEND"
    SUPPRESS = "SUPPRESS"

