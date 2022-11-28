from dataclasses import dataclass, field
from enum import Enum

class ConformancePackComplianceTypeEnum(str, Enum):
    COMPLIANT = "COMPLIANT"
    NON_COMPLIANT = "NON_COMPLIANT"
    INSUFFICIENT_DATA = "INSUFFICIENT_DATA"

