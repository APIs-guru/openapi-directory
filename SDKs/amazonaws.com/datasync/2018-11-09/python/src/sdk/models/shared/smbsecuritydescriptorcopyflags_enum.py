from dataclasses import dataclass, field
from typing import Enum

class SmbSecurityDescriptorCopyFlagsEnum(str, Enum):
    NONE = "NONE"
    OWNER_DACL = "OWNER_DACL"
    OWNER_DACL_SACL = "OWNER_DACL_SACL"

