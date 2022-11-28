from dataclasses import dataclass, field
from enum import Enum

class ClientAuthenticationTypeEnum(str, Enum):
    SMART_CARD = "SmartCard"

