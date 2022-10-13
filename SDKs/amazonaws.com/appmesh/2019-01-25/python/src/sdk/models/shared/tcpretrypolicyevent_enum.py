from dataclasses import dataclass, field
from typing import Enum

class TCPRetryPolicyEventEnum(str, Enum):
    CONNECTION_ERROR = "connection-error"

