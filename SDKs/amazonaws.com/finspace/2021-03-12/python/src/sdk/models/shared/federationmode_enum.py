from dataclasses import dataclass, field
from typing import Enum

class FederationModeEnum(str, Enum):
    FEDERATED = "FEDERATED"
    LOCAL = "LOCAL"

