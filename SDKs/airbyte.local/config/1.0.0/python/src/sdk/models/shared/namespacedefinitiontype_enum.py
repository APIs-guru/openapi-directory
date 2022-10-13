from dataclasses import dataclass, field
from typing import Enum

class NamespaceDefinitionTypeEnum(str, Enum):
    SOURCE = "source"
    DESTINATION = "destination"
    CUSTOMFORMAT = "customformat"

