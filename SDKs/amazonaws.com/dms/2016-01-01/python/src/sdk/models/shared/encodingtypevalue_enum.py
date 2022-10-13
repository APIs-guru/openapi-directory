from dataclasses import dataclass, field
from typing import Enum

class EncodingTypeValueEnum(str, Enum):
    PLAIN = "plain"
    PLAIN_DICTIONARY = "plain-dictionary"
    RLE_DICTIONARY = "rle-dictionary"

