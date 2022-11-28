from dataclasses import dataclass, field
from enum import Enum

class DataCatalogTypeEnum(str, Enum):
    LAMBDA = "LAMBDA"
    GLUE = "GLUE"
    HIVE = "HIVE"

