from dataclasses import dataclass, field
from enum import Enum

class ImportDataCharacterEncodingEnum(str, Enum):
    UTF_8 = "UTF-8"
    US_ASCII = "US-ASCII"
    ISO_8859_1 = "ISO-8859-1"
    UTF_16_BE = "UTF-16BE"
    UTF_16_LE = "UTF-16LE"
    UTF_16 = "UTF-16"

