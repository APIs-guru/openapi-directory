from dataclasses import dataclass, field
from typing import Enum

class ApprovalStateEnum(str, Enum):
    APPROVE = "APPROVE"
    REVOKE = "REVOKE"

