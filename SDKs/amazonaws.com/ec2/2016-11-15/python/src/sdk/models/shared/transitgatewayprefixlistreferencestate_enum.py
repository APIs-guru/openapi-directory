from dataclasses import dataclass, field
from enum import Enum

class TransitGatewayPrefixListReferenceStateEnum(str, Enum):
    PENDING = "pending"
    AVAILABLE = "available"
    MODIFYING = "modifying"
    DELETING = "deleting"

