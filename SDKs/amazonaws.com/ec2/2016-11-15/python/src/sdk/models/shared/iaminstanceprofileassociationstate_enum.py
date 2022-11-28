from dataclasses import dataclass, field
from enum import Enum

class IamInstanceProfileAssociationStateEnum(str, Enum):
    ASSOCIATING = "associating"
    ASSOCIATED = "associated"
    DISASSOCIATING = "disassociating"
    DISASSOCIATED = "disassociated"

