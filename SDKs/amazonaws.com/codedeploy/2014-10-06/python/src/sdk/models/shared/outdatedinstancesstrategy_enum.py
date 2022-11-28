from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class OutdatedInstancesStrategyEnum(str, Enum):
    UPDATE = "UPDATE"
    IGNORE = "IGNORE"

