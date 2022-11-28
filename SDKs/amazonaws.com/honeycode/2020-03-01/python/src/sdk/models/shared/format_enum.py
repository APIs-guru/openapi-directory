from dataclasses import dataclass, field
from enum import Enum

class FormatEnum(str, Enum):
    AUTO = "AUTO"
    NUMBER = "NUMBER"
    CURRENCY = "CURRENCY"
    DATE = "DATE"
    TIME = "TIME"
    DATE_TIME = "DATE_TIME"
    PERCENTAGE = "PERCENTAGE"
    TEXT = "TEXT"
    ACCOUNTING = "ACCOUNTING"
    CONTACT = "CONTACT"
    ROWLINK = "ROWLINK"

