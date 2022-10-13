from dataclasses import dataclass, field
from typing import Enum

class ErrorCategoryEnum(str, Enum):
    THE_INPUTS_TO_THIS_REQUEST_ARE_INVALID = "The_inputs_to_this_request_are_invalid"
    SERVICE_LIMITS_HAVE_BEEN_EXCEEDED = "Service_limits_have_been_exceeded"
    MISSING_REQUIRED_PERMISSION_TO_PERFORM_THIS_REQUEST = "Missing_required_permission_to_perform_this_request"
    ONE_OR_MORE_INPUTS_TO_THIS_REQUEST_WERE_NOT_FOUND = "One_or_more_inputs_to_this_request_were_not_found"
    THE_SYSTEM_TEMPORARILY_LACKS_SUFFICIENT_RESOURCES_TO_PROCESS_THE_REQUEST = "The_system_temporarily_lacks_sufficient_resources_to_process_the_request"
    AN_INTERNAL_ERROR_HAS_OCCURRED = "An_internal_error_has_occurred"
    CANCELLED = "Cancelled"
    A_USER_RECOVERABLE_ERROR_HAS_OCCURRED = "A_user_recoverable_error_has_occurred"

