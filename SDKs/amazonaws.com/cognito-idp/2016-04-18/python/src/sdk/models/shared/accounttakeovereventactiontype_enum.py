from dataclasses import dataclass, field
from enum import Enum

class AccountTakeoverEventActionTypeEnum(str, Enum):
    BLOCK = "BLOCK"
    MFA_IF_CONFIGURED = "MFA_IF_CONFIGURED"
    MFA_REQUIRED = "MFA_REQUIRED"
    NO_ACTION = "NO_ACTION"

