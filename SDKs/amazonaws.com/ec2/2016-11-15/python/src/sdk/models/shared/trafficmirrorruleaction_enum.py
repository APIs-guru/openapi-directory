from dataclasses import dataclass, field
from enum import Enum

class TrafficMirrorRuleActionEnum(str, Enum):
    ACCEPT = "accept"
    REJECT = "reject"

