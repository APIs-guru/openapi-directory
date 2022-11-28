from dataclasses import dataclass, field
from enum import Enum

class DocumentReadFeatureTypesEnum(str, Enum):
    TABLES = "TABLES"
    FORMS = "FORMS"

