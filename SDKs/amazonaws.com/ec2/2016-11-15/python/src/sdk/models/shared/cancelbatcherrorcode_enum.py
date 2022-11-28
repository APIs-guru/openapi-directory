from dataclasses import dataclass, field
from enum import Enum

class CancelBatchErrorCodeEnum(str, Enum):
    FLEET_REQUEST_ID_DOES_NOT_EXIST = "fleetRequestIdDoesNotExist"
    FLEET_REQUEST_ID_MALFORMED = "fleetRequestIdMalformed"
    FLEET_REQUEST_NOT_IN_CANCELLABLE_STATE = "fleetRequestNotInCancellableState"
    UNEXPECTED_ERROR = "unexpectedError"

