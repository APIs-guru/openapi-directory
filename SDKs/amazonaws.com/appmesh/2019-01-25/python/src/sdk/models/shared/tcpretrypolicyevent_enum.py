from dataclasses import dataclass, field
from enum import Enum

class TCPRetryPolicyEventEnum(str, Enum):
    CONNECTION_ERROR = "connection-error"

