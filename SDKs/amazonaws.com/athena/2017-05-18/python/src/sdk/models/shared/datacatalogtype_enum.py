from dataclasses import dataclass, field
from typing import Enum

class DataCatalogTypeEnum(str, Enum):
    LAMBDA = "LAMBDA"
    GLUE = "GLUE"
    HIVE = "HIVE"

