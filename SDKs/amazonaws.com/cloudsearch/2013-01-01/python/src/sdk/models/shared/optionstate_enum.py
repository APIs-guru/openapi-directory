from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class OptionStateEnum(str, Enum):
    REQUIRES_INDEX_DOCUMENTS = "RequiresIndexDocuments"
    PROCESSING = "Processing"
    ACTIVE = "Active"
    FAILED_TO_VALIDATE = "FailedToValidate"

