from dataclasses import dataclass, field
from typing import Enum

class PolicyTypeEnum(str, Enum):
    RULE_BASED = "RuleBased"
    TARGET_BASED = "TargetBased"

