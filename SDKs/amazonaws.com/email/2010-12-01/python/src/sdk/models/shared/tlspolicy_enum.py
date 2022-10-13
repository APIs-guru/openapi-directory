from dataclasses import dataclass, field
from typing import Enum,Optional

class TLSPolicyEnum(str, Enum):
    REQUIRE = "Require"
    OPTIONAL = "Optional"

