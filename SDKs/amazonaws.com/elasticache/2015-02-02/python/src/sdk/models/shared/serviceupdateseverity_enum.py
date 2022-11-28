from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class ServiceUpdateSeverityEnum(str, Enum):
    CRITICAL = "critical"
    IMPORTANT = "important"
    MEDIUM = "medium"
    LOW = "low"

