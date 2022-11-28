from dataclasses import dataclass, field
from enum import Enum

class FileSystemTypeEnum(str, Enum):
    WINDOWS = "WINDOWS"
    LUSTRE = "LUSTRE"
    ONTAP = "ONTAP"

