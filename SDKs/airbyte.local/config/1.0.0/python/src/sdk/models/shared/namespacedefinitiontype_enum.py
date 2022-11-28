from dataclasses import dataclass, field
from enum import Enum

class NamespaceDefinitionTypeEnum(str, Enum):
    SOURCE = "source"
    DESTINATION = "destination"
    CUSTOMFORMAT = "customformat"

