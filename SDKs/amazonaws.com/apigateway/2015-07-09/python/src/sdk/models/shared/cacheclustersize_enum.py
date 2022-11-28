from dataclasses import dataclass, field
from enum import Enum

class CacheClusterSizeEnum(str, Enum):
    ZERO_5 = "0.5"
    ONE_6 = "1.6"
    SIX_1 = "6.1"
    THIRTEEN_5 = "13.5"
    TWENTY_EIGHT_4 = "28.4"
    FIFTY_EIGHT_2 = "58.2"
    ONE_HUNDRED_AND_EIGHTEEN = "118"
    TWO_HUNDRED_AND_THIRTY_SEVEN = "237"

