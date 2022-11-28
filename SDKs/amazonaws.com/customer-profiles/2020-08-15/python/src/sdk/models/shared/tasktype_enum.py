from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class TaskTypeEnum(str, Enum):
    ARITHMETIC = "Arithmetic"
    FILTER = "Filter"
    MAP = "Map"
    MASK = "Mask"
    MERGE = "Merge"
    TRUNCATE = "Truncate"
    VALIDATE = "Validate"

