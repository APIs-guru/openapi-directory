from dataclasses import dataclass, field
from enum import Enum

class TransformSortColumnTypeEnum(str, Enum):
    NAME = "NAME"
    TRANSFORM_TYPE = "TRANSFORM_TYPE"
    STATUS = "STATUS"
    CREATED = "CREATED"
    LAST_MODIFIED = "LAST_MODIFIED"

