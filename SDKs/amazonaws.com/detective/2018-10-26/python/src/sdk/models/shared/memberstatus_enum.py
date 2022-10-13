from dataclasses import dataclass, field
from typing import Enum

class MemberStatusEnum(str, Enum):
    INVITED = "INVITED"
    VERIFICATION_IN_PROGRESS = "VERIFICATION_IN_PROGRESS"
    VERIFICATION_FAILED = "VERIFICATION_FAILED"
    ENABLED = "ENABLED"
    ACCEPTED_BUT_DISABLED = "ACCEPTED_BUT_DISABLED"

