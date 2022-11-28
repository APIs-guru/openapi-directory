from dataclasses import dataclass, field
from enum import Enum

class ActionEnumEnum(str, Enum):
    CREATE = "CREATE"
    UPDATE_METADATA = "UPDATE_METADATA"
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"
    DELETE = "DELETE"
    UNDER_REVIEW = "UNDER_REVIEW"
    REVIEWED = "REVIEWED"
    IMPORT_EVIDENCE = "IMPORT_EVIDENCE"

