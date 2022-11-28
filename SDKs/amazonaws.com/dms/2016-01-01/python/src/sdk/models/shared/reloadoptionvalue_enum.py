from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class ReloadOptionValueEnum(str, Enum):
    DATA_RELOAD = "data-reload"
    VALIDATE_ONLY = "validate-only"

