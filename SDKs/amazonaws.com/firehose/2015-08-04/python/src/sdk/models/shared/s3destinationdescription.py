from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import bufferinghints
from . import cloudwatchloggingoptions
from . import compressionformat_enum
from . import encryptionconfiguration


@dataclass_json
@dataclass
class S3DestinationDescription:
    bucket_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BucketARN' }})
    buffering_hints: bufferinghints.BufferingHints = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BufferingHints' }})
    cloud_watch_logging_options: Optional[cloudwatchloggingoptions.CloudWatchLoggingOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchLoggingOptions' }})
    compression_format: compressionformat_enum.CompressionFormatEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompressionFormat' }})
    encryption_configuration: encryptionconfiguration.EncryptionConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncryptionConfiguration' }})
    error_output_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorOutputPrefix' }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Prefix' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleARN' }})
    
