from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class S3DestinationDescription:
    r"""S3DestinationDescription
    Describes a destination in Amazon S3.
    """
    
    bucket_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BucketARN') }})
    buffering_hints: BufferingHints = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BufferingHints') }})
    compression_format: CompressionFormatEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompressionFormat') }})
    encryption_configuration: EncryptionConfiguration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionConfiguration') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    cloud_watch_logging_options: Optional[CloudWatchLoggingOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchLoggingOptions') }})
    error_output_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorOutputPrefix') }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Prefix') }})
    
