from dataclasses import dataclass, field
from enum import Enum

class ErrorCodeEnum(str, Enum):
    RESOURCE_NOT_FOUND_EXCEPTION = "ResourceNotFoundException"
    INVALID_REQUEST_EXCEPTION = "InvalidRequestException"
    INTERNAL_FAILURE_EXCEPTION = "InternalFailureException"
    SERVICE_UNAVAILABLE_EXCEPTION = "ServiceUnavailableException"
    THROTTLING_EXCEPTION = "ThrottlingException"

