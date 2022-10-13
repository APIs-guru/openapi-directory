from dataclasses import dataclass, field
from typing import Enum

class ElasticsearchIndexRotationPeriodEnum(str, Enum):
    NO_ROTATION = "NoRotation"
    ONE_HOUR = "OneHour"
    ONE_DAY = "OneDay"
    ONE_WEEK = "OneWeek"
    ONE_MONTH = "OneMonth"

