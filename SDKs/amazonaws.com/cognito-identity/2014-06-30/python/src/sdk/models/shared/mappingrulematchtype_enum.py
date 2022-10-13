from dataclasses import dataclass, field
from typing import Enum

class MappingRuleMatchTypeEnum(str, Enum):
    EQUALS = "Equals"
    CONTAINS = "Contains"
    STARTS_WITH = "StartsWith"
    NOT_EQUAL = "NotEqual"

