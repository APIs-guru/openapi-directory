from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class RepositoryTriggerEventEnumEnum(str, Enum):
    ALL = "all"
    UPDATE_REFERENCE = "updateReference"
    CREATE_REFERENCE = "createReference"
    DELETE_REFERENCE = "deleteReference"

