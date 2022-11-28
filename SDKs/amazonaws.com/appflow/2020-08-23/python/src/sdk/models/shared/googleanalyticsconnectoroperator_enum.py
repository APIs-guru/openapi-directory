from dataclasses import dataclass, field
from enum import Enum

class GoogleAnalyticsConnectorOperatorEnum(str, Enum):
    PROJECTION = "PROJECTION"
    BETWEEN = "BETWEEN"

