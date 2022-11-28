from dataclasses import dataclass, field
from enum import Enum

class InsightTypeEnum(str, Enum):
    API_CALL_RATE_INSIGHT = "ApiCallRateInsight"

