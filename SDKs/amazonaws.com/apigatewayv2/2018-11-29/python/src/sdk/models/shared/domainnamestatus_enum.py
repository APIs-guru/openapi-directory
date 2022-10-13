from dataclasses import dataclass, field
from typing import Enum

class DomainNameStatusEnum(str, Enum):
    AVAILABLE = "AVAILABLE"
    UPDATING = "UPDATING"
    PENDING_CERTIFICATE_REIMPORT = "PENDING_CERTIFICATE_REIMPORT"
    PENDING_OWNERSHIP_VERIFICATION = "PENDING_OWNERSHIP_VERIFICATION"

