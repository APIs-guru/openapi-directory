from dataclasses import dataclass, field
from enum import Enum

class SmbVersionEnum(str, Enum):
    AUTOMATIC = "AUTOMATIC"
    SMB2 = "SMB2"
    SMB3 = "SMB3"

