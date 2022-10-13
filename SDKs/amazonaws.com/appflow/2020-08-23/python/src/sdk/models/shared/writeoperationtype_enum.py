from dataclasses import dataclass, field
from typing import Enum

class WriteOperationTypeEnum(str, Enum):
    INSERT = "INSERT"
    UPSERT = "UPSERT"
    UPDATE = "UPDATE"

