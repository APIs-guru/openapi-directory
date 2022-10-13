from dataclasses import dataclass, field
from typing import Enum

class PolicyComplianceStatusTypeEnum(str, Enum):
    COMPLIANT = "COMPLIANT"
    NON_COMPLIANT = "NON_COMPLIANT"

