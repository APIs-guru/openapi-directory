from dataclasses import dataclass, field
from enum import Enum

class MessageActionEnum(str, Enum):
    SUPPRESS = "SUPPRESS"
    RESEND = "RESEND"

