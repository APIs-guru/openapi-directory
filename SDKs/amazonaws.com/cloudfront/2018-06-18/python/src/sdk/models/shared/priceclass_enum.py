from dataclasses import dataclass, field
from enum import Enum

class PriceClassEnum(str, Enum):
    PRICE_CLASS_100 = "PriceClass_100"
    PRICE_CLASS_200 = "PriceClass_200"
    PRICE_CLASS_ALL = "PriceClass_All"

