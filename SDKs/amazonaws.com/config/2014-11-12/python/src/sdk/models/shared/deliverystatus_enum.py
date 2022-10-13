from dataclasses import dataclass, field
from typing import Enum

class DeliveryStatusEnum(str, Enum):
    SUCCESS = "Success"
    FAILURE = "Failure"
    NOT_APPLICABLE = "Not_Applicable"

