from dataclasses import dataclass, field
from typing import Enum

class DirectConnectGatewayAssociationProposalStateEnum(str, Enum):
    REQUESTED = "requested"
    ACCEPTED = "accepted"
    DELETED = "deleted"

