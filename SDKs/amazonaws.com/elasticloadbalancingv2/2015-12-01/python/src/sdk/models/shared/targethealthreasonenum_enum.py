from dataclasses import dataclass, field
from enum import Enum

class TargetHealthReasonEnumEnum(str, Enum):
    ELB_REGISTRATION_IN_PROGRESS = "Elb.RegistrationInProgress"
    ELB_INITIAL_HEALTH_CHECKING = "Elb.InitialHealthChecking"
    TARGET_RESPONSE_CODE_MISMATCH = "Target.ResponseCodeMismatch"
    TARGET_TIMEOUT = "Target.Timeout"
    TARGET_FAILED_HEALTH_CHECKS = "Target.FailedHealthChecks"
    TARGET_NOT_REGISTERED = "Target.NotRegistered"
    TARGET_NOT_IN_USE = "Target.NotInUse"
    TARGET_DEREGISTRATION_IN_PROGRESS = "Target.DeregistrationInProgress"
    TARGET_INVALID_STATE = "Target.InvalidState"
    TARGET_IP_UNUSABLE = "Target.IpUnusable"
    TARGET_HEALTH_CHECK_DISABLED = "Target.HealthCheckDisabled"
    ELB_INTERNAL_ERROR = "Elb.InternalError"

