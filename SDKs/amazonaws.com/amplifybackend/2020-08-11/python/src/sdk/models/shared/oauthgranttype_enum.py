from dataclasses import dataclass, field
from enum import Enum

class OAuthGrantTypeEnum(str, Enum):
    CODE = "CODE"
    IMPLICIT = "IMPLICIT"

