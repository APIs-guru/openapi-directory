from dataclasses import dataclass, field
from enum import Enum

class ProcessorTypeEnum(str, Enum):
    RECORD_DE_AGGREGATION = "RecordDeAggregation"
    LAMBDA = "Lambda"
    METADATA_EXTRACTION = "MetadataExtraction"
    APPEND_DELIMITER_TO_RECORD = "AppendDelimiterToRecord"

