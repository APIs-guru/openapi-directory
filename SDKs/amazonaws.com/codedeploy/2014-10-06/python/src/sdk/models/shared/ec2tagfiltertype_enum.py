from dataclasses import dataclass, field
from enum import Enum

class Ec2TagFilterTypeEnum(str, Enum):
    KEY_ONLY = "KEY_ONLY"
    VALUE_ONLY = "VALUE_ONLY"
    KEY_AND_VALUE = "KEY_AND_VALUE"

