from dataclasses import dataclass, field
from typing import Enum

class InstanceStateChangeReasonCodeEnum(str, Enum):
    INTERNAL_ERROR = "INTERNAL_ERROR"
    VALIDATION_ERROR = "VALIDATION_ERROR"
    INSTANCE_FAILURE = "INSTANCE_FAILURE"
    BOOTSTRAP_FAILURE = "BOOTSTRAP_FAILURE"
    CLUSTER_TERMINATED = "CLUSTER_TERMINATED"

