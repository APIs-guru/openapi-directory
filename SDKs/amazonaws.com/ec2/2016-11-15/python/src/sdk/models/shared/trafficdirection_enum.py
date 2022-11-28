from dataclasses import dataclass, field
from enum import Enum

class TrafficDirectionEnum(str, Enum):
    INGRESS = "ingress"
    EGRESS = "egress"

