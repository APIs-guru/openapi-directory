from dataclasses import dataclass, field
from enum import Enum

class ElasticsearchS3BackupModeEnum(str, Enum):
    FAILED_DOCUMENTS_ONLY = "FailedDocumentsOnly"
    ALL_DOCUMENTS = "AllDocuments"

