from dataclasses import dataclass, field
from typing import Enum

class ComparisonOperatorTypeEnum(str, Enum):
    GREATER_THAN_OR_EQUAL_TO_THRESHOLD = "GreaterThanOrEqualToThreshold"
    GREATER_THAN_THRESHOLD = "GreaterThanThreshold"
    LESS_THAN_THRESHOLD = "LessThanThreshold"
    LESS_THAN_OR_EQUAL_TO_THRESHOLD = "LessThanOrEqualToThreshold"

