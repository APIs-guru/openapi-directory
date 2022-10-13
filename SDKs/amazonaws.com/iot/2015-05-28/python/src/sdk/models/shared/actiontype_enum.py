from dataclasses import dataclass, field
from typing import Enum

class ActionTypeEnum(str, Enum):
    PUBLISH = "PUBLISH"
    SUBSCRIBE = "SUBSCRIBE"
    RECEIVE = "RECEIVE"
    CONNECT = "CONNECT"

