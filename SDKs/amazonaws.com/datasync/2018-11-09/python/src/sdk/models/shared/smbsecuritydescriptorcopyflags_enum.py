from dataclasses import dataclass, field
from enum import Enum

class SmbSecurityDescriptorCopyFlagsEnum(str, Enum):
    NONE = "NONE"
    OWNER_DACL = "OWNER_DACL"
    OWNER_DACL_SACL = "OWNER_DACL_SACL"

