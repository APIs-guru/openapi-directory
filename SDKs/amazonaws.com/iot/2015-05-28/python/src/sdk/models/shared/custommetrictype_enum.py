from dataclasses import dataclass, field
from enum import Enum

class CustomMetricTypeEnum(str, Enum):
    STRING_LIST = "string-list"
    IP_ADDRESS_LIST = "ip-address-list"
    NUMBER_LIST = "number-list"
    NUMBER = "number"

