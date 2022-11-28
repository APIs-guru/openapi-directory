from dataclasses import dataclass, field
from enum import Enum

class TrustDirectionEnum(str, Enum):
    ONE_WAY_OUTGOING = "One-Way: Outgoing"
    ONE_WAY_INCOMING = "One-Way: Incoming"
    TWO_WAY = "Two-Way"

