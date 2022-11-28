from dataclasses import dataclass, field
from enum import Enum

class ExportEnvironmentEnum(str, Enum):
    CITRIX = "citrix"
    VMWARE = "vmware"
    MICROSOFT = "microsoft"

