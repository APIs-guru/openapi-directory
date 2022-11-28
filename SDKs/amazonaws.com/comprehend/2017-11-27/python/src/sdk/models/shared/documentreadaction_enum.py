from dataclasses import dataclass, field
from enum import Enum

class DocumentReadActionEnum(str, Enum):
    TEXTRACT_DETECT_DOCUMENT_TEXT = "TEXTRACT_DETECT_DOCUMENT_TEXT"
    TEXTRACT_ANALYZE_DOCUMENT = "TEXTRACT_ANALYZE_DOCUMENT"

