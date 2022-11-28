from dataclasses import dataclass, field
from enum import Enum

class TransitionToIaRulesEnum(str, Enum):
    AFTER_7_DAYS = "AFTER_7_DAYS"
    AFTER_14_DAYS = "AFTER_14_DAYS"
    AFTER_30_DAYS = "AFTER_30_DAYS"
    AFTER_60_DAYS = "AFTER_60_DAYS"
    AFTER_90_DAYS = "AFTER_90_DAYS"

