from dataclasses import dataclass, field
from typing import Enum

class DataRepositoryTaskTypeEnum(str, Enum):
    EXPORT_TO_REPOSITORY = "EXPORT_TO_REPOSITORY"

