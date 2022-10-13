from dataclasses import dataclass, field
from typing import Enum

class AmbiguousRoleResolutionTypeEnum(str, Enum):
    AUTHENTICATED_ROLE = "AuthenticatedRole"
    DENY = "Deny"

