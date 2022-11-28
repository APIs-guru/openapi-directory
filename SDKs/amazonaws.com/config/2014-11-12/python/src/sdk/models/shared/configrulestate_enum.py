from dataclasses import dataclass, field
from enum import Enum

class ConfigRuleStateEnum(str, Enum):
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"
    DELETING_RESULTS = "DELETING_RESULTS"
    EVALUATING = "EVALUATING"

