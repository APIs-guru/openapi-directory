from dataclasses import dataclass, field
from typing import Enum

class NfsVersionEnum(str, Enum):
    AUTOMATIC = "AUTOMATIC"
    NFS3 = "NFS3"
    NFS4_0 = "NFS4_0"
    NFS4_1 = "NFS4_1"

