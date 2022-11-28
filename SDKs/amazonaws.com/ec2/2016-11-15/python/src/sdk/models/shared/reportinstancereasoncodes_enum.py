from dataclasses import dataclass, field
from enum import Enum

class ReportInstanceReasonCodesEnum(str, Enum):
    INSTANCE_STUCK_IN_STATE = "instance-stuck-in-state"
    UNRESPONSIVE = "unresponsive"
    NOT_ACCEPTING_CREDENTIALS = "not-accepting-credentials"
    PASSWORD_NOT_AVAILABLE = "password-not-available"
    PERFORMANCE_NETWORK = "performance-network"
    PERFORMANCE_INSTANCE_STORE = "performance-instance-store"
    PERFORMANCE_EBS_VOLUME = "performance-ebs-volume"
    PERFORMANCE_OTHER = "performance-other"
    OTHER = "other"

