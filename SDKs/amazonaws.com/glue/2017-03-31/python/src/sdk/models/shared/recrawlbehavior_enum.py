from dataclasses import dataclass, field
from typing import Enum

class RecrawlBehaviorEnum(str, Enum):
    CRAWL_EVERYTHING = "CRAWL_EVERYTHING"
    CRAWL_NEW_FOLDERS_ONLY = "CRAWL_NEW_FOLDERS_ONLY"

