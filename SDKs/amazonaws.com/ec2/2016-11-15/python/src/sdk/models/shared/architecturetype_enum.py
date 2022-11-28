from dataclasses import dataclass, field
from enum import Enum

class ArchitectureTypeEnum(str, Enum):
    I386 = "i386"
    X86_64 = "x86_64"
    ARM64 = "arm64"

