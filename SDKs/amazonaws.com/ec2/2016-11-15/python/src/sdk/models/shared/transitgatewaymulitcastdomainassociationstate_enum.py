from dataclasses import dataclass, field
from enum import Enum

class TransitGatewayMulitcastDomainAssociationStateEnum(str, Enum):
    PENDING_ACCEPTANCE = "pendingAcceptance"
    ASSOCIATING = "associating"
    ASSOCIATED = "associated"
    DISASSOCIATING = "disassociating"
    DISASSOCIATED = "disassociated"
    REJECTED = "rejected"
    FAILED = "failed"

