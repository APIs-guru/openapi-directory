from dataclasses import dataclass, field
from typing import Enum

class EntityTypeEnum(str, Enum):
    PERSON = "PERSON"
    LOCATION = "LOCATION"
    ORGANIZATION = "ORGANIZATION"
    COMMERCIAL_ITEM = "COMMERCIAL_ITEM"
    EVENT = "EVENT"
    DATE = "DATE"
    QUANTITY = "QUANTITY"
    TITLE = "TITLE"
    OTHER = "OTHER"

