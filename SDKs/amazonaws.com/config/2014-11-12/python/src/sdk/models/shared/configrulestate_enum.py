from dataclasses import dataclass, field
from typing import Enum

class ConfigRuleStateEnum(str, Enum):
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"
    DELETING_RESULTS = "DELETING_RESULTS"
    EVALUATING = "EVALUATING"

