from dataclasses import dataclass, field
from typing import Enum

class DmsSslModeValueEnum(str, Enum):
    NONE = "none"
    REQUIRE = "require"
    VERIFY_CA = "verify-ca"
    VERIFY_FULL = "verify-full"

