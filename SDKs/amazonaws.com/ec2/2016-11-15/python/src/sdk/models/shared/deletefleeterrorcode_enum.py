from dataclasses import dataclass, field
from enum import Enum

class DeleteFleetErrorCodeEnum(str, Enum):
    FLEET_ID_DOES_NOT_EXIST = "fleetIdDoesNotExist"
    FLEET_ID_MALFORMED = "fleetIdMalformed"
    FLEET_NOT_IN_DELETABLE_STATE = "fleetNotInDeletableState"
    UNEXPECTED_ERROR = "unexpectedError"

