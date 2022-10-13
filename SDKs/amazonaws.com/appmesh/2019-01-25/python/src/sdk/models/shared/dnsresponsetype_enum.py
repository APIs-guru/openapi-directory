from dataclasses import dataclass, field
from typing import Enum

class DNSResponseTypeEnum(str, Enum):
    LOADBALANCER = "LOADBALANCER"
    ENDPOINTS = "ENDPOINTS"

