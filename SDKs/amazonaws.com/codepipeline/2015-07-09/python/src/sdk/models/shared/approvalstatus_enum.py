from dataclasses import dataclass, field
from typing import Enum

class ApprovalStatusEnum(str, Enum):
    APPROVED = "Approved"
    REJECTED = "Rejected"

