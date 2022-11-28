from dataclasses import dataclass, field
from enum import Enum

class FederationModeEnum(str, Enum):
    FEDERATED = "FEDERATED"
    LOCAL = "LOCAL"

