from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import bufferinghints
from . import cloudwatchloggingoptions
from . import compressionformat_enum
from . import dataformatconversionconfiguration
from . import dynamicpartitioningconfiguration
from . import encryptionconfiguration
from . import processingconfiguration
from . import s3destinationdescription
from . import s3backupmode_enum


@dataclass_json
@dataclass
class ExtendedS3DestinationDescription:
    bucket_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BucketARN' }})
    buffering_hints: bufferinghints.BufferingHints = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BufferingHints' }})
    cloud_watch_logging_options: Optional[cloudwatchloggingoptions.CloudWatchLoggingOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchLoggingOptions' }})
    compression_format: compressionformat_enum.CompressionFormatEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompressionFormat' }})
    data_format_conversion_configuration: Optional[dataformatconversionconfiguration.DataFormatConversionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataFormatConversionConfiguration' }})
    dynamic_partitioning_configuration: Optional[dynamicpartitioningconfiguration.DynamicPartitioningConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DynamicPartitioningConfiguration' }})
    encryption_configuration: encryptionconfiguration.EncryptionConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncryptionConfiguration' }})
    error_output_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorOutputPrefix' }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Prefix' }})
    processing_configuration: Optional[processingconfiguration.ProcessingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProcessingConfiguration' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleARN' }})
    s3_backup_description: Optional[s3destinationdescription.S3DestinationDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3BackupDescription' }})
    s3_backup_mode: Optional[s3backupmode_enum.S3BackupModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3BackupMode' }})
    
