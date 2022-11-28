from dataclasses import dataclass, field
from enum import Enum

class ArchitectureValuesEnum(str, Enum):
    I386 = "i386"
    X86_64 = "x86_64"
    ARM64 = "arm64"
    X86_64_MAC = "x86_64_mac"

