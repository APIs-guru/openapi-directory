from dataclasses import dataclass, field
from typing import Enum

class ProtectionPolicyEnum(str, Enum):
    NO_PROTECTION = "NoProtection"
    FULL_PROTECTION = "FullProtection"

