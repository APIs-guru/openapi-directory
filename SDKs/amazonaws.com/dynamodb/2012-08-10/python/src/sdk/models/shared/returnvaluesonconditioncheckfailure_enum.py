from dataclasses import dataclass, field
from enum import Enum

class ReturnValuesOnConditionCheckFailureEnum(str, Enum):
    ALL_OLD = "ALL_OLD"
    NONE = "NONE"

