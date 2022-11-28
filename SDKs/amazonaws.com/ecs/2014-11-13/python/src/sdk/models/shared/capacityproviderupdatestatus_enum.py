from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class CapacityProviderUpdateStatusEnum(str, Enum):
    DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS"
    DELETE_COMPLETE = "DELETE_COMPLETE"
    DELETE_FAILED = "DELETE_FAILED"
    UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS"
    UPDATE_COMPLETE = "UPDATE_COMPLETE"
    UPDATE_FAILED = "UPDATE_FAILED"

