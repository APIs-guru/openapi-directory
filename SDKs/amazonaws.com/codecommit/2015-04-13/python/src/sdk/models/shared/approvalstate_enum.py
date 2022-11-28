from dataclasses import dataclass, field
from enum import Enum

class ApprovalStateEnum(str, Enum):
    APPROVE = "APPROVE"
    REVOKE = "REVOKE"

