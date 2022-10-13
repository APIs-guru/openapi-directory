from dataclasses import dataclass, field
from typing import Enum

class RiskDecisionTypeEnum(str, Enum):
    NO_RISK = "NoRisk"
    ACCOUNT_TAKEOVER = "AccountTakeover"
    BLOCK = "Block"

