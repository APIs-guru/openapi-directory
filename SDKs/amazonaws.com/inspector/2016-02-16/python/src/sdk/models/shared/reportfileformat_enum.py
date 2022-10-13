from dataclasses import dataclass, field
from typing import Enum

class ReportFileFormatEnum(str, Enum):
    HTML = "HTML"
    PDF = "PDF"

