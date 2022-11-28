from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class TLSPolicyEnum(str, Enum):
    REQUIRE = "Require"
    OPTIONAL = "Optional"

