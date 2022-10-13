from dataclasses import dataclass, field
from typing import Enum

class CertificateStateEnum(str, Enum):
    REGISTERING = "Registering"
    REGISTERED = "Registered"
    REGISTER_FAILED = "RegisterFailed"
    DEREGISTERING = "Deregistering"
    DEREGISTERED = "Deregistered"
    DEREGISTER_FAILED = "DeregisterFailed"

