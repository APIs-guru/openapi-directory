from dataclasses import dataclass, field
from enum import Enum

class SnsActionEncodingEnum(str, Enum):
    UTF_8 = "UTF-8"
    BASE64 = "Base64"

