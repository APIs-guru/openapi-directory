from dataclasses import dataclass, field
from enum import Enum

class RepositoryAssociationStateEnum(str, Enum):
    ASSOCIATED = "Associated"
    ASSOCIATING = "Associating"
    FAILED = "Failed"
    DISASSOCIATING = "Disassociating"
    DISASSOCIATED = "Disassociated"

