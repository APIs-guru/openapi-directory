from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class ValidatePolicyFindingTypeEnum(str, Enum):
    ERROR = "ERROR"
    SECURITY_WARNING = "SECURITY_WARNING"
    SUGGESTION = "SUGGESTION"
    WARNING = "WARNING"

