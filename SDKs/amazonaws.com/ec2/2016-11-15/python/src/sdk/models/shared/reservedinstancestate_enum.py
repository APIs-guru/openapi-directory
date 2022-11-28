from dataclasses import dataclass, field
from enum import Enum

class ReservedInstanceStateEnum(str, Enum):
    PAYMENT_PENDING = "payment-pending"
    ACTIVE = "active"
    PAYMENT_FAILED = "payment-failed"
    RETIRED = "retired"
    QUEUED = "queued"
    QUEUED_DELETED = "queued-deleted"

