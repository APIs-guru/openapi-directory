from dataclasses import dataclass, field
from enum import Enum

class ReservationStateEnum(str, Enum):
    PAYMENT_PENDING = "payment-pending"
    PAYMENT_FAILED = "payment-failed"
    ACTIVE = "active"
    RETIRED = "retired"

