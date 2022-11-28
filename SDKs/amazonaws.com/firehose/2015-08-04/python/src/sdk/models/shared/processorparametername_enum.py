from dataclasses import dataclass, field
from enum import Enum

class ProcessorParameterNameEnum(str, Enum):
    LAMBDA_ARN = "LambdaArn"
    NUMBER_OF_RETRIES = "NumberOfRetries"
    METADATA_EXTRACTION_QUERY = "MetadataExtractionQuery"
    JSON_PARSING_ENGINE = "JsonParsingEngine"
    ROLE_ARN = "RoleArn"
    BUFFER_SIZE_IN_M_BS = "BufferSizeInMBs"
    BUFFER_INTERVAL_IN_SECONDS = "BufferIntervalInSeconds"
    SUB_RECORD_TYPE = "SubRecordType"
    DELIMITER = "Delimiter"

