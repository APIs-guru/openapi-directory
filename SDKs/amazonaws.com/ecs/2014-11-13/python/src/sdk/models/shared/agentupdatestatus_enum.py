from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class AgentUpdateStatusEnum(str, Enum):
    PENDING = "PENDING"
    STAGING = "STAGING"
    STAGED = "STAGED"
    UPDATING = "UPDATING"
    UPDATED = "UPDATED"
    FAILED = "FAILED"

