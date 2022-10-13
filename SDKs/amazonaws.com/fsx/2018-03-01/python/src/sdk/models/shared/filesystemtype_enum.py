from dataclasses import dataclass, field
from typing import Enum

class FileSystemTypeEnum(str, Enum):
    WINDOWS = "WINDOWS"
    LUSTRE = "LUSTRE"
    ONTAP = "ONTAP"

