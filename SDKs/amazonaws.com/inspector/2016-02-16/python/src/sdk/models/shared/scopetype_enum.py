from dataclasses import dataclass, field
from typing import Enum

class ScopeTypeEnum(str, Enum):
    INSTANCE_ID = "INSTANCE_ID"
    RULES_PACKAGE_ARN = "RULES_PACKAGE_ARN"

