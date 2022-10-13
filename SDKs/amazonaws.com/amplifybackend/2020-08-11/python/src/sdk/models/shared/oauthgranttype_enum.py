from dataclasses import dataclass, field
from typing import Enum

class OAuthGrantTypeEnum(str, Enum):
    CODE = "CODE"
    IMPLICIT = "IMPLICIT"

