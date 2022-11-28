from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class UpdateBehaviorEnum(str, Enum):
    LOG = "LOG"
    UPDATE_IN_DATABASE = "UPDATE_IN_DATABASE"

