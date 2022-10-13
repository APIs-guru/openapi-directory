from dataclasses import dataclass, field
from typing import Enum

class DocumentReadFeatureTypesEnum(str, Enum):
    TABLES = "TABLES"
    FORMS = "FORMS"

