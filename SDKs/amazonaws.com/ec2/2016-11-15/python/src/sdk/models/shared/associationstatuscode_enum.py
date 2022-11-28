from dataclasses import dataclass, field
from enum import Enum

class AssociationStatusCodeEnum(str, Enum):
    ASSOCIATING = "associating"
    ASSOCIATED = "associated"
    ASSOCIATION_FAILED = "association-failed"
    DISASSOCIATING = "disassociating"
    DISASSOCIATED = "disassociated"

