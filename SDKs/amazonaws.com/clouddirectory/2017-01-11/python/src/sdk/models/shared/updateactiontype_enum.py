from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class UpdateActionTypeEnum(str, Enum):
    CREATE_OR_UPDATE = "CREATE_OR_UPDATE"
    DELETE = "DELETE"

