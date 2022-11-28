from dataclasses import dataclass, field
from enum import Enum

class RegistrationStatusEnum(str, Enum):
    REGISTERED = "Registered"
    DEREGISTERED = "Deregistered"

