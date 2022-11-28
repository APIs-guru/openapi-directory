from dataclasses import dataclass, field
from enum import Enum

class ProtectionPolicyEnum(str, Enum):
    NO_PROTECTION = "NoProtection"
    FULL_PROTECTION = "FullProtection"

