from dataclasses import dataclass, field
from typing import Enum

class ActionCodeEnum(str, Enum):
    ARCHIVE_RETRIEVAL = "ArchiveRetrieval"
    INVENTORY_RETRIEVAL = "InventoryRetrieval"
    SELECT = "Select"

