from dataclasses import dataclass, field
from enum import Enum

class UnsuccessfulInstanceCreditSpecificationErrorCodeEnum(str, Enum):
    INVALID_INSTANCE_ID_MALFORMED = "InvalidInstanceID.Malformed"
    INVALID_INSTANCE_ID_NOT_FOUND = "InvalidInstanceID.NotFound"
    INCORRECT_INSTANCE_STATE = "IncorrectInstanceState"
    INSTANCE_CREDIT_SPECIFICATION_NOT_SUPPORTED = "InstanceCreditSpecification.NotSupported"

