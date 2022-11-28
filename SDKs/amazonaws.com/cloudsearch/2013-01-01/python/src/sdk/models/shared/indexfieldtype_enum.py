from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class IndexFieldTypeEnum(str, Enum):
    INT = "int"
    DOUBLE = "double"
    LITERAL = "literal"
    TEXT = "text"
    DATE = "date"
    LATLON = "latlon"
    INT_ARRAY = "int-array"
    DOUBLE_ARRAY = "double-array"
    LITERAL_ARRAY = "literal-array"
    TEXT_ARRAY = "text-array"
    DATE_ARRAY = "date-array"

