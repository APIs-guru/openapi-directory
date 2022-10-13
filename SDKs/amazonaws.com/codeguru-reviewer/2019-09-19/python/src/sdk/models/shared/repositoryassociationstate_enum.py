from dataclasses import dataclass, field
from typing import Enum

class RepositoryAssociationStateEnum(str, Enum):
    ASSOCIATED = "Associated"
    ASSOCIATING = "Associating"
    FAILED = "Failed"
    DISASSOCIATING = "Disassociating"
    DISASSOCIATED = "Disassociated"

