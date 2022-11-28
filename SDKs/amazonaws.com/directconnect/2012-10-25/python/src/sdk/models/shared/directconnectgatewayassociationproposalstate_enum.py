from dataclasses import dataclass, field
from enum import Enum

class DirectConnectGatewayAssociationProposalStateEnum(str, Enum):
    REQUESTED = "requested"
    ACCEPTED = "accepted"
    DELETED = "deleted"

