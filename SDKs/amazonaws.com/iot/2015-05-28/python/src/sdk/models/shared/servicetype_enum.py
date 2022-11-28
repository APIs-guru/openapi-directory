from dataclasses import dataclass, field
from enum import Enum

class ServiceTypeEnum(str, Enum):
    DATA = "DATA"
    CREDENTIAL_PROVIDER = "CREDENTIAL_PROVIDER"
    JOBS = "JOBS"

