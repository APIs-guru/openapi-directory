from dataclasses import dataclass, field
from enum import Enum

class RedirectActionStatusCodeEnumEnum(str, Enum):
    HTTP_301 = "HTTP_301"
    HTTP_302 = "HTTP_302"

