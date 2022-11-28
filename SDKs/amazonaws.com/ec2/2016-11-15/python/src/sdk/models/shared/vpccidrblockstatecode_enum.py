from dataclasses import dataclass, field
from enum import Enum

class VpcCidrBlockStateCodeEnum(str, Enum):
    ASSOCIATING = "associating"
    ASSOCIATED = "associated"
    DISASSOCIATING = "disassociating"
    DISASSOCIATED = "disassociated"
    FAILING = "failing"
    FAILED = "failed"

