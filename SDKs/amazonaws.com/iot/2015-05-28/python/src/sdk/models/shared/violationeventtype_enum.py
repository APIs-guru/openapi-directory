from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class ViolationEventTypeEnum(str, Enum):
    IN_ALARM = "in-alarm"
    ALARM_CLEARED = "alarm-cleared"
    ALARM_INVALIDATED = "alarm-invalidated"

