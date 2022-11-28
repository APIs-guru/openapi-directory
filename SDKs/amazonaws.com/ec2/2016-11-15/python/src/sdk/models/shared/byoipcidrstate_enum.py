from dataclasses import dataclass, field
from enum import Enum

class ByoipCidrStateEnum(str, Enum):
    ADVERTISED = "advertised"
    DEPROVISIONED = "deprovisioned"
    FAILED_DEPROVISION = "failed-deprovision"
    FAILED_PROVISION = "failed-provision"
    PENDING_DEPROVISION = "pending-deprovision"
    PENDING_PROVISION = "pending-provision"
    PROVISIONED = "provisioned"
    PROVISIONED_NOT_PUBLICLY_ADVERTISABLE = "provisioned-not-publicly-advertisable"

