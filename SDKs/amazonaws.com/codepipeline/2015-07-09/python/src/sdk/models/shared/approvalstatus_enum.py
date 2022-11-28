from dataclasses import dataclass, field
from enum import Enum

class ApprovalStatusEnum(str, Enum):
    APPROVED = "Approved"
    REJECTED = "Rejected"

