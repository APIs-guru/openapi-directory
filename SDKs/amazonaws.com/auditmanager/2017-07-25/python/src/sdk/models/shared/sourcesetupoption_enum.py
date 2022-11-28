from dataclasses import dataclass, field
from enum import Enum

class SourceSetUpOptionEnum(str, Enum):
    SYSTEM_CONTROLS_MAPPING = "System_Controls_Mapping"
    PROCEDURAL_CONTROLS_MAPPING = "Procedural_Controls_Mapping"

