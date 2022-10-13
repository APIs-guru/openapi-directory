from dataclasses import dataclass, field
from typing import Enum

class RepositoryTriggerEventEnumEnum(str, Enum):
    ALL = "all"
    UPDATE_REFERENCE = "updateReference"
    CREATE_REFERENCE = "createReference"
    DELETE_REFERENCE = "deleteReference"

