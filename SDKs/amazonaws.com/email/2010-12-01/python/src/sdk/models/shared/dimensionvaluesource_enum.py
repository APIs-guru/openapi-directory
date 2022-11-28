from dataclasses import dataclass, field
from enum import Enum

class DimensionValueSourceEnum(str, Enum):
    MESSAGE_TAG = "messageTag"
    EMAIL_HEADER = "emailHeader"
    LINK_TAG = "linkTag"

