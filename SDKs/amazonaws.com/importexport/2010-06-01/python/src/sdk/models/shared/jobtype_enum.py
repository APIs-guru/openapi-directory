from dataclasses import dataclass, field
from enum import Enum

class JobTypeEnum(str, Enum):
    IMPORT = "Import"
    EXPORT = "Export"

