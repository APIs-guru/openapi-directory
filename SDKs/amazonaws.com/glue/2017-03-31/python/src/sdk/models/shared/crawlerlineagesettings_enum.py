from dataclasses import dataclass, field
from enum import Enum

class CrawlerLineageSettingsEnum(str, Enum):
    ENABLE = "ENABLE"
    DISABLE = "DISABLE"

