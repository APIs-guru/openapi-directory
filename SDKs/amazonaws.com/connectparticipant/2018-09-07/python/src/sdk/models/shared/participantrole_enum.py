from dataclasses import dataclass, field
from typing import Enum

class ParticipantRoleEnum(str, Enum):
    AGENT = "AGENT"
    CUSTOMER = "CUSTOMER"
    SYSTEM = "SYSTEM"

