from dataclasses import dataclass, field
from typing import Enum

class CrawlerLineageSettingsEnum(str, Enum):
    ENABLE = "ENABLE"
    DISABLE = "DISABLE"

