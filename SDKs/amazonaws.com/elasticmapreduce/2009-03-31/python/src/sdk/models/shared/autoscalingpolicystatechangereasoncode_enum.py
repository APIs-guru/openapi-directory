from dataclasses import dataclass, field
from typing import Enum

class AutoScalingPolicyStateChangeReasonCodeEnum(str, Enum):
    USER_REQUEST = "USER_REQUEST"
    PROVISION_FAILURE = "PROVISION_FAILURE"
    CLEANUP_FAILURE = "CLEANUP_FAILURE"

