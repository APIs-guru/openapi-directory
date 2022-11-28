from dataclasses import dataclass, field
from enum import Enum

class ObjectTypeEnumEnum(str, Enum):
    ASSESSMENT = "ASSESSMENT"
    CONTROL_SET = "CONTROL_SET"
    CONTROL = "CONTROL"
    DELEGATION = "DELEGATION"
    ASSESSMENT_REPORT = "ASSESSMENT_REPORT"

