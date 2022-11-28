from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class FailureTypeEnum(str, Enum):
    UPDATE_CANCELLED = "UpdateCancelled"
    CANCELLATION_FAILED = "CancellationFailed"
    ROLLBACK_FAILED = "RollbackFailed"
    ROLLBACK_SUCCESSFUL = "RollbackSuccessful"
    INTERNAL_FAILURE = "InternalFailure"
    INVALID_ENVIRONMENT_STATE = "InvalidEnvironmentState"
    PERMISSIONS_ERROR = "PermissionsError"

