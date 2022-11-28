from dataclasses import dataclass, field
from enum import Enum

class FieldContentTypeEnum(str, Enum):
    STRING = "STRING"
    NUMBER = "NUMBER"
    PHONE_NUMBER = "PHONE_NUMBER"
    EMAIL_ADDRESS = "EMAIL_ADDRESS"
    NAME = "NAME"

