from dataclasses import dataclass, field
from enum import Enum

class DeliveryStatusEnum(str, Enum):
    SUCCESS = "Success"
    FAILURE = "Failure"
    NOT_APPLICABLE = "Not_Applicable"

