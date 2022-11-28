from dataclasses import dataclass, field
from enum import Enum

class ResourceOwnerEnum(str, Enum):
    SELF = "SELF"
    OTHER_ACCOUNTS = "OTHER_ACCOUNTS"

