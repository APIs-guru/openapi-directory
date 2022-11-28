from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class UpdateStatusEnum(str, Enum):
    IN_PROGRESS = "InProgress"
    FAILED = "Failed"
    CANCELLED = "Cancelled"
    SUCCESSFUL = "Successful"

