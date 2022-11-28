from dataclasses import dataclass, field
from enum import Enum

class TransitGatewayAssociationStateEnum(str, Enum):
    ASSOCIATING = "associating"
    ASSOCIATED = "associated"
    DISASSOCIATING = "disassociating"
    DISASSOCIATED = "disassociated"

