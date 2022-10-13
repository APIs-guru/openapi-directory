from dataclasses import dataclass, field
from typing import Enum

class ClientAuthenticationTypeEnum(str, Enum):
    SMART_CARD = "SmartCard"

