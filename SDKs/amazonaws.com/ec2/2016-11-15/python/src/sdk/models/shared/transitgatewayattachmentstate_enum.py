from dataclasses import dataclass, field
from enum import Enum

class TransitGatewayAttachmentStateEnum(str, Enum):
    INITIATING = "initiating"
    INITIATING_REQUEST = "initiatingRequest"
    PENDING_ACCEPTANCE = "pendingAcceptance"
    ROLLING_BACK = "rollingBack"
    PENDING = "pending"
    AVAILABLE = "available"
    MODIFYING = "modifying"
    DELETING = "deleting"
    DELETED = "deleted"
    FAILED = "failed"
    REJECTED = "rejected"
    REJECTING = "rejecting"
    FAILING = "failing"

