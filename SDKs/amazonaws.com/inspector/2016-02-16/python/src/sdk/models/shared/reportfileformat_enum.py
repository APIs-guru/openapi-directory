from dataclasses import dataclass, field
from enum import Enum

class ReportFileFormatEnum(str, Enum):
    HTML = "HTML"
    PDF = "PDF"

