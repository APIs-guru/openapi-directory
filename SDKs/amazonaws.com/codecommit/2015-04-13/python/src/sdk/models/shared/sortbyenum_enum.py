from dataclasses import dataclass, field
from enum import Enum

class SortByEnumEnum(str, Enum):
    REPOSITORY_NAME = "repositoryName"
    LAST_MODIFIED_DATE = "lastModifiedDate"

