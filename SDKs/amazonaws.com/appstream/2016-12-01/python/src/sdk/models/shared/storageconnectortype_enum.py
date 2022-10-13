from dataclasses import dataclass, field
from typing import Enum

class StorageConnectorTypeEnum(str, Enum):
    HOMEFOLDERS = "HOMEFOLDERS"
    GOOGLE_DRIVE = "GOOGLE_DRIVE"
    ONE_DRIVE = "ONE_DRIVE"

