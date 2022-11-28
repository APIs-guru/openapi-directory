from dataclasses import dataclass, field
from enum import Enum

class RouteTableAssociationStateCodeEnum(str, Enum):
    ASSOCIATING = "associating"
    ASSOCIATED = "associated"
    DISASSOCIATING = "disassociating"
    DISASSOCIATED = "disassociated"
    FAILED = "failed"

