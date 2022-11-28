from dataclasses import dataclass, field
from enum import Enum

class ClientVpnAuthorizationRuleStatusCodeEnum(str, Enum):
    AUTHORIZING = "authorizing"
    ACTIVE = "active"
    FAILED = "failed"
    REVOKING = "revoking"

