from dataclasses import dataclass, field
from enum import Enum

class DNSResponseTypeEnum(str, Enum):
    LOADBALANCER = "LOADBALANCER"
    ENDPOINTS = "ENDPOINTS"

