from dataclasses import dataclass, field
from typing import Enum

class ConformancePackComplianceTypeEnum(str, Enum):
    COMPLIANT = "COMPLIANT"
    NON_COMPLIANT = "NON_COMPLIANT"
    INSUFFICIENT_DATA = "INSUFFICIENT_DATA"

