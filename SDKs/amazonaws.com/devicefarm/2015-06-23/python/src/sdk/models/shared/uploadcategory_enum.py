from dataclasses import dataclass, field
from typing import Enum

class UploadCategoryEnum(str, Enum):
    CURATED = "CURATED"
    PRIVATE = "PRIVATE"

