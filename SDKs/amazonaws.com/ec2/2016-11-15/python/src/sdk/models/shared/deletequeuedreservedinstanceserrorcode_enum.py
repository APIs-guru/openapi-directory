from dataclasses import dataclass, field
from enum import Enum

class DeleteQueuedReservedInstancesErrorCodeEnum(str, Enum):
    RESERVED_INSTANCES_ID_INVALID = "reserved-instances-id-invalid"
    RESERVED_INSTANCES_NOT_IN_QUEUED_STATE = "reserved-instances-not-in-queued-state"
    UNEXPECTED_ERROR = "unexpected-error"

