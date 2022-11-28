from dataclasses import dataclass, field
from enum import Enum

class UnauthorizedCacheControlHeaderStrategyEnum(str, Enum):
    FAIL_WITH_403 = "FAIL_WITH_403"
    SUCCEED_WITH_RESPONSE_HEADER = "SUCCEED_WITH_RESPONSE_HEADER"
    SUCCEED_WITHOUT_RESPONSE_HEADER = "SUCCEED_WITHOUT_RESPONSE_HEADER"

