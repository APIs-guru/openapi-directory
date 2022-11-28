from dataclasses import dataclass, field
from enum import Enum

class InstanceGroupStateChangeReasonCodeEnum(str, Enum):
    INTERNAL_ERROR = "INTERNAL_ERROR"
    VALIDATION_ERROR = "VALIDATION_ERROR"
    INSTANCE_FAILURE = "INSTANCE_FAILURE"
    CLUSTER_TERMINATED = "CLUSTER_TERMINATED"

