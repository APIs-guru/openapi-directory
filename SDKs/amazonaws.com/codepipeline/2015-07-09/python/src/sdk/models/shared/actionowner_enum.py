from dataclasses import dataclass, field
from typing import Enum

class ActionOwnerEnum(str, Enum):
    AWS = "AWS"
    THIRD_PARTY = "ThirdParty"
    CUSTOM = "Custom"

