from dataclasses import dataclass, field
from typing import Enum

class MessageActionEnum(str, Enum):
    SUPPRESS = "SUPPRESS"
    RESEND = "RESEND"

