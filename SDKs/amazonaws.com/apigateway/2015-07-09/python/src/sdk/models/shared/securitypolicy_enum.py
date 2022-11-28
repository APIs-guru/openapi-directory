from dataclasses import dataclass, field
from enum import Enum

class SecurityPolicyEnum(str, Enum):
    TLS_1_0 = "TLS_1_0"
    TLS_1_2 = "TLS_1_2"

