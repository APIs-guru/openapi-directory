from dataclasses import dataclass, field
from typing import Enum

class ConnectionStateEnum(str, Enum):
    CREATING = "CREATING"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    AUTHORIZED = "AUTHORIZED"
    DEAUTHORIZED = "DEAUTHORIZED"
    AUTHORIZING = "AUTHORIZING"
    DEAUTHORIZING = "DEAUTHORIZING"

