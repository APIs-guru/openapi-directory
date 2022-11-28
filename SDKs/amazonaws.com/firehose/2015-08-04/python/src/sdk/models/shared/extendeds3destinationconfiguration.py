from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExtendedS3DestinationConfiguration:
    r"""ExtendedS3DestinationConfiguration
    Describes the configuration of a destination in Amazon S3.
    """
    
    bucket_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BucketARN') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    buffering_hints: Optional[BufferingHints] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BufferingHints') }})
    cloud_watch_logging_options: Optional[CloudWatchLoggingOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLoggingOptions') }})
    compression_format: Optional[CompressionFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompressionFormat') }})
    data_format_conversion_configuration: Optional[DataFormatConversionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataFormatConversionConfiguration') }})
    dynamic_partitioning_configuration: Optional[DynamicPartitioningConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DynamicPartitioningConfiguration') }})
    encryption_configuration: Optional[EncryptionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionConfiguration') }})
    error_output_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorOutputPrefix') }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Prefix') }})
    processing_configuration: Optional[ProcessingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessingConfiguration') }})
    s3_backup_configuration: Optional[S3DestinationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BackupConfiguration') }})
    s3_backup_mode: Optional[S3BackupModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BackupMode') }})
    
