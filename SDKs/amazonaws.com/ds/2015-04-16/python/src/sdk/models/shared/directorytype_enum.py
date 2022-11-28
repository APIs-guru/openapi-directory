from dataclasses import dataclass, field
from enum import Enum

class DirectoryTypeEnum(str, Enum):
    SIMPLE_AD = "SimpleAD"
    AD_CONNECTOR = "ADConnector"
    MICROSOFT_AD = "MicrosoftAD"
    SHARED_MICROSOFT_AD = "SharedMicrosoftAD"

