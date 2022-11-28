from dataclasses import dataclass, field
from enum import Enum

class MessageActionTypeEnum(str, Enum):
    RESEND = "RESEND"
    SUPPRESS = "SUPPRESS"

