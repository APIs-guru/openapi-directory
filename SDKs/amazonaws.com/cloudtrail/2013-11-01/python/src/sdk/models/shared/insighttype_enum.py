from dataclasses import dataclass, field
from typing import Enum

class InsightTypeEnum(str, Enum):
    API_CALL_RATE_INSIGHT = "ApiCallRateInsight"

