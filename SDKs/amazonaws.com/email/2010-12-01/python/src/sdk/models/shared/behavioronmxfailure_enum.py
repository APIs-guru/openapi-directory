from dataclasses import dataclass, field
from enum import Enum

class BehaviorOnMxFailureEnum(str, Enum):
    USE_DEFAULT_VALUE = "UseDefaultValue"
    REJECT_MESSAGE = "RejectMessage"

