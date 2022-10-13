from dataclasses import dataclass, field
from typing import Enum

class SmbVersionEnum(str, Enum):
    AUTOMATIC = "AUTOMATIC"
    SMB2 = "SMB2"
    SMB3 = "SMB3"

