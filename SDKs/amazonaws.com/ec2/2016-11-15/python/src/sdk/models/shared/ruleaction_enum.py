from dataclasses import dataclass, field
from enum import Enum

class RuleActionEnum(str, Enum):
    ALLOW = "allow"
    DENY = "deny"

