from dataclasses import dataclass, field
from enum import Enum

class DatePartitionSequenceValueEnum(str, Enum):
    YYYYMMDD = "YYYYMMDD"
    YYYYMMDDHH = "YYYYMMDDHH"
    YYYYMM = "YYYYMM"
    MMYYYYDD = "MMYYYYDD"
    DDMMYYYY = "DDMMYYYY"

