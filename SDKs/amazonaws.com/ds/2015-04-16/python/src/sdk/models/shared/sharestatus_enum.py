from dataclasses import dataclass, field
from enum import Enum

class ShareStatusEnum(str, Enum):
    SHARED = "Shared"
    PENDING_ACCEPTANCE = "PendingAcceptance"
    REJECTED = "Rejected"
    REJECTING = "Rejecting"
    REJECT_FAILED = "RejectFailed"
    SHARING = "Sharing"
    SHARE_FAILED = "ShareFailed"
    DELETED = "Deleted"
    DELETING = "Deleting"

