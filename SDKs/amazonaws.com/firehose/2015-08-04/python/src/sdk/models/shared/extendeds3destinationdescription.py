from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExtendedS3DestinationDescription:
    r"""ExtendedS3DestinationDescription
    Describes a destination in Amazon S3.
    """
    
    bucket_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BucketARN') }})
    buffering_hints: BufferingHints = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BufferingHints') }})
    compression_format: CompressionFormatEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompressionFormat') }})
    encryption_configuration: EncryptionConfiguration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionConfiguration') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    cloud_watch_logging_options: Optional[CloudWatchLoggingOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLoggingOptions') }})
    data_format_conversion_configuration: Optional[DataFormatConversionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataFormatConversionConfiguration') }})
    dynamic_partitioning_configuration: Optional[DynamicPartitioningConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DynamicPartitioningConfiguration') }})
    error_output_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorOutputPrefix') }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Prefix') }})
    processing_configuration: Optional[ProcessingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProcessingConfiguration') }})
    s3_backup_description: Optional[S3DestinationDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BackupDescription') }})
    s3_backup_mode: Optional[S3BackupModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BackupMode') }})
    
