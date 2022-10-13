from dataclasses import dataclass, field
from typing import Enum

class OwnerEnum(str, Enum):
    CUSTOM_LAMBDA = "CUSTOM_LAMBDA"
    AWS = "AWS"

