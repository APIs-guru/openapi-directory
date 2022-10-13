from dataclasses import dataclass, field
from typing import Enum

class SortByEnumEnum(str, Enum):
    REPOSITORY_NAME = "repositoryName"
    LAST_MODIFIED_DATE = "lastModifiedDate"

