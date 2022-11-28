from dataclasses import dataclass, field
from enum import Enum

class VpcPeeringConnectionStateReasonCodeEnum(str, Enum):
    INITIATING_REQUEST = "initiating-request"
    PENDING_ACCEPTANCE = "pending-acceptance"
    ACTIVE = "active"
    DELETED = "deleted"
    REJECTED = "rejected"
    FAILED = "failed"
    EXPIRED = "expired"
    PROVISIONING = "provisioning"
    DELETING = "deleting"

