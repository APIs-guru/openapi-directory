from dataclasses import dataclass, field
from enum import Enum

class AccountRoleStatusEnum(str, Enum):
    READY = "READY"
    CREATING = "CREATING"
    PENDING_DELETION = "PENDING_DELETION"
    DELETING = "DELETING"
    DELETED = "DELETED"

