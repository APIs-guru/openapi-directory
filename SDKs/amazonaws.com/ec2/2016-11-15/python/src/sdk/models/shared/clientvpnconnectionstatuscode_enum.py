from dataclasses import dataclass, field
from enum import Enum

class ClientVpnConnectionStatusCodeEnum(str, Enum):
    ACTIVE = "active"
    FAILED_TO_TERMINATE = "failed-to-terminate"
    TERMINATING = "terminating"
    TERMINATED = "terminated"

