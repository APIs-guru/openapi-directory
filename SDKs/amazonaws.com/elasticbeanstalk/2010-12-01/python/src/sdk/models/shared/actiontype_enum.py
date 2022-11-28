from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class ActionTypeEnum(str, Enum):
    INSTANCE_REFRESH = "InstanceRefresh"
    PLATFORM_UPDATE = "PlatformUpdate"
    UNKNOWN = "Unknown"

